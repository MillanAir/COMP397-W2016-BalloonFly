var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Island CLASS ++++++++++++++++++++++++++++++++++++
    var Moon = (function (_super) {
        __extends(Moon, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Moon() {
            _super.call(this, "moon");
            this._speed.x = -0.05; //island speed
            this._reset(this._rightBounds);
            this.name = "island";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Moon.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // has outside the viewport         
            if (this.x <= value - this.width) {
                this._reset(this._rightBounds);
            }
        };
        // reset the ocean offscreen
        Moon.prototype._reset = function (value) {
            this.x = this.centerX + 900;
            this.y = this.centerY;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Moon.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Moon;
    }(objects.GameObject));
    objects.Moon = Moon;
})(objects || (objects = {}));

//# sourceMappingURL=moon.js.map
