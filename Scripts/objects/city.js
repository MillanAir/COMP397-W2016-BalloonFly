var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var City = (function (_super) {
        __extends(City, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function City() {
            _super.call(this, "city");
            this._speed.x = -5; //ocean speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        City.prototype._checkBounds = function (value) {
            // check to see if the top of the ocean 
            // has met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the ocean offscreen
        City.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        City.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2599);
        };
        return City;
    }(objects.GameObject));
    objects.City = City;
})(objects || (objects = {}));

//# sourceMappingURL=city.js.map
