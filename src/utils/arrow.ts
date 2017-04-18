namespace Utils
{
    export class Arrow
    {
        private canvas: HTMLCanvasElement;
        private ctx: CanvasRenderingContext2D;
        private x: number;
        private y: number;
        private color: string;
        constructor(canvasName:string,color?:string)
        {
            this.canvas = <HTMLCanvasElement>document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.x = this.canvas.width/2;
            this.y = this.canvas.height/2;
            this.color = (color)?color:'#AAD7FF';
        }
        public draw():void
        {
            window.requestAnimationFrame(()=>{
                this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                this.draw();
            });
            this.ctx.save();
            this.ctx.translate(this.x,this.y);
            this.ctx.lineWidth = 4;
            this.ctx.fillStyle = this.color;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x-this.x,-this.y);
            this.ctx.lineTo(-this.x,this.y-this.y); //右斜线
            this.ctx.lineTo(this.x,this.y-this.y); //左横线
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
        }
    }
}

