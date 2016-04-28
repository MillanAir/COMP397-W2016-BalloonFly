module objects{
    // PLAYER CLASS ++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap{
        
        private _leftBounds: number;
        private _rightBounds: number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        public width: number;
        public height: number;
        public gameSound: createjs.AbstractSoundInstance;
        
        constructor(){
            super(assets.getResult("balloon"));
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            
            
            this._leftBounds = this.width * 0.5;
            this._topBounds = this.regX;
            this._bottomBounds = config.Screen.HEIGHT - this.regX;
            
            this.y = 360;
            
            // assign and play the engine sound
            this.gameSound = createjs.Sound.play("music");
            // Loop engine sound forever
            this.gameSound.loop = -1;
        }
        
        private _checkBounds():void{
            // Left Bound Check
            if(this.x < this._leftBounds){
                this.x = this._leftBounds;
            }
            
            // Top Bound Check
            if(this.y < this._topBounds){
                this.y = this._topBounds;
            }
            
            //Bottom bound Check
            if(this.y > this._bottomBounds){
                this.y = this._bottomBounds;
            }
            
        }
        
        public update(): void{
            this.y = stage.mouseY;            
            
            this._checkBounds();
        }
    }
}