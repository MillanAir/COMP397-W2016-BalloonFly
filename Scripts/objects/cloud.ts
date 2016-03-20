module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cloud");
            
           this._speed.x = -5; //cloud speed
           this._reset(this._rightBounds);
           
           this.name = "cloud";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // has outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random()* 5)+5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value + this.width +10;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
            
            
        }
    }
}