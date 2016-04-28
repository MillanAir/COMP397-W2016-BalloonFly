var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Knife = (function (_super) {
        __extends(Knife, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Knife() {
            _super.call(this, "knife");
            this._speed.x = -5; //cloud speed
            this._reset(this._rightBounds);
            this.name = "knife";
            this.soundString = "pop";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Knife.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // has outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the ocean offscreen
        Knife.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value + this.width + 10;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Knife.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Knife;
    }(objects.GameObject));
    objects.Knife = Knife;
})(objects || (objects = {}));

//# sourceMappingURL=knife.js.map
