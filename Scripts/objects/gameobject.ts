module objects {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        protected _speed: createjs.Point;        
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        
        // PUBLIC INSTANCE VARIABLES +++++++++++++++++
        public  name:string;
        public width:number;
        public height:number;
        public centerX: number;
        public centerY: number;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));

            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = -this.height;
            this._bottomBounds = config.Screen.HEIGHT + this.height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this.width;
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            
            // check if y value has met the reset criteria
            if (this.x <= value) {
                this._reset(this._leftBounds);
            }
        }

        // Reset the Object offscreen
        protected _reset(value: number): void {
            var leftBounds: number;
            var rightBounds: number;
            
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the ocean 5 px per frame
            this.x += this._speed.y;
            this._checkBounds(this._rightBounds);
        }
    }
}