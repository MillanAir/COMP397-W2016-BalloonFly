// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _city: objects.City;
        private _moon: objects.Moon;
        private _knives: objects.Knife[];
        private _player: objects.Player;
        private _knifeCount: number;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PRIVATE METHODS
        
        /**
         * @method _updateScore
         * @return void
         */
        private _updateScore():void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._knifeCount = 6;
            livesValue = 5;
            scoreValue = 0;
            
            // Added knife array
            this._knives = new Array<objects.Knife>();
            
            // added Knife to the scene
            this._city = new objects.City();
            this.addChild(this._city);

            // added moon to the scene
            this._moon = new objects.Moon();
            this.addChild(this._moon); 
            
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);            

            // added knife to the scene
            for(var knife:number = 0; knife < this._knifeCount ; knife++){
                this._knives[knife] = new objects.Knife();
                this.addChild(this._knives[knife]);
            }
            
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label(
                "Lives: " + livesValue,
                "40px Consolas",
                "#ffff00",
                10, 10, false
            );
            this.addChild(this._livesLabel);
            
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#ffff00",
                390, 10, false
            );
            this.addChild(this._scoreLabel);
            
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._city.update();
            this._moon.update();
            this._player.update();
            for(var knife in this._knives){
                this._knives[knife].update();
                this._collision.check(this._knives[knife]);
            }
            
            this._updateScore();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}