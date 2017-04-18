var Utils;
(function (Utils) {
    var Arrow = (function () {
        function Arrow(canvasName, color) {
            this.canvas = document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.color = (color) ? color : '#AAD7FF';
        }
        Arrow.prototype.draw = function () {
            var _this = this;
            window.requestAnimationFrame(function () {
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                _this.draw();
            });
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.ctx.lineWidth = 4;
            this.ctx.fillStyle = this.color;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x - this.x, -this.y);
            this.ctx.lineTo(-this.x, this.y - this.y); //右斜线
            this.ctx.lineTo(this.x, this.y - this.y); //左横线
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
        };
        return Arrow;
    }());
    Utils.Arrow = Arrow;
})(Utils || (Utils = {}));
