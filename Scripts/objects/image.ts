module objects {
    export class Image extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        width: number;
        height: number;
        //CONSTRUCTOR
        constructor(pathString: string, x: number, y: number, centered: boolean) {
            super(assets.getResult(pathString));
            this.x = x;
            this.y = y;

            this.width = 150;
            this.height = 50;

            if (centered) {
                this.regX = this.width * 0.5;
                this.regY = this.height * 0.5;
            }           
        }
    }
} 