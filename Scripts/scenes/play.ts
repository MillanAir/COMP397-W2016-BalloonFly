// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _city: objects.City;
        private _island: objects.Island;
        private _knives: objects.Knife[];
        private _player: objects.Player;
        private _knifeCount: number;
        private _collision: managers.Collision;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._knifeCount = 6;
            
            // Added knife array
            this._knives = new Array<objects.Knife>();
            
            // added Knife to the scene
            this._city = new objects.City();
            this.addChild(this._city);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island); 
            
            // added island to the scene
            this._player = new objects.Player();
            this.addChild(this._player);            

            // added knife to the scene
            for(var knife:number = 0; knife < this._knifeCount ; knife++){
                this._knives[knife] = new objects.Knife();
                this.addChild(this._knives[knife]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._city.update();
            this._island.update();
            this._player.update();
            for(var knife in this._knives){
                this._knives[knife].update();
                this._collision.check(this._knives[knife]);
            }
            
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}