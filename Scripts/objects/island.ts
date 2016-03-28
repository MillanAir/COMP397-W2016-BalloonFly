module objects {
    // Island CLASS ++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("moon");
            
           this._speed.x = -0.05; //island speed
           this._reset(this._rightBounds);
           this.name = "island";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // has outside the viewport         
            if(this.x <= value-this.width) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            
            this.x = this.centerX + 900;
            this.y = this.centerY;
           // this.x = (value+ this.width + 10);
          //  this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}