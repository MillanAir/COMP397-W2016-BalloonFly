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
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._knifeCount = 6;
            // Added knife array
            this._knives = new Array();
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
            for (var knife = 0; knife < this._knifeCount; knife++) {
                this._knives[knife] = new objects.Knife();
                this.addChild(this._knives[knife]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._city.update();
            this._island.update();
            this._player.update();
            for (var knife in this._knives) {
                this._knives[knife].update();
                this._collision.check(this._knives[knife]);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
