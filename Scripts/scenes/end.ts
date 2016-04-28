// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _scoreLabel: objects.Label;
        private _end: objects.Image;
        private _scores: objects.Image;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {            
            
            // add the Background Image to the End scene
            this._end = new objects.Image(
                "end",
                75,
                25, true);
            this.addChild(this._end);
            //added Scores to the scene
            this._scores = new objects.Image(
                "scores",
                config.Screen.CENTER_X-50, config.Screen.CENTER_Y+50, true);
            this.addChild(this._scores);            
            
            //added ScoreLabel to the scene
            this._scoreLabel = new objects.Label(
                "" + scoreValue,
                "40px Consolas",
                "#ff7474",
                config.Screen.CENTER_X+50, config.Screen.CENTER_Y+45, true
            );
            this.addChild(this._scoreLabel);
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 320, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}