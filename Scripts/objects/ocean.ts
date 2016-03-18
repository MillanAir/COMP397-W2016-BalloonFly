module objects {
    // OCEAN CLASS
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _speed: number;

        constructor() {
            super(assets.getResult("ocean"));

            this._speed = 5; // ocean speed
            this._reset();
        }
        
        private _checkBounds():void{
            // check to see if the top of the ocean
            // has met the top of the screen
            
            if(this.y >= 8 ){
                this._reset();
            }
        }

        private _reset(): void {
            this.y = -960;
        }

        public update(): void {
            // scroll the ocean 5 px per frame
            this.y += this._speed;
            this._checkBounds();
        }
    }
}