var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        Play.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            //Calculate Scores
            timer++;
            timeInMilliseconds = Math.floor((timer) / 6);
            scoreValue = timeInMilliseconds;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._knifeCount = 6;
            livesValue = 5;
            scoreValue = 0;
            // Added knife array
            this._knives = new Array();
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
            for (var knife = 0; knife < this._knifeCount; knife++) {
                this._knives[knife] = new objects.Knife();
                this.addChild(this._knives[knife]);
            }
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "40px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 390, 10, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._city.update();
            this._moon.update();
            this._player.update();
            for (var knife in this._knives) {
                this._knives[knife].update();
                this._collision.check(this._knives[knife]);
            }
            this._updateScore();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
