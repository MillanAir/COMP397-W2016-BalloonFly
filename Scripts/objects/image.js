var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Image = (function (_super) {
        __extends(Image, _super);
        //CONSTRUCTOR
        function Image(pathString, x, y, centered) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            this.width = 150;
            this.height = 50;
            if (centered) {
                this.regX = this.width * 0.5;
                this.regY = this.height * 0.5;
            }
        }
        return Image;
    }(createjs.Bitmap));
    objects.Image = Image;
})(objects || (objects = {}));

//# sourceMappingURL=image.js.map
