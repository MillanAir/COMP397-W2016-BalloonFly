module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cloud");
            
           this._speed.y = 5; //cloud speed
           this._reset(this._topBounds);
           
           this.name = "cloud";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // has outside the viewport         
            if(this.y >= value) {
                this._reset(this._topBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            this._speed.y = Math.floor(Math.random()* 5)+5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        }
    }
}