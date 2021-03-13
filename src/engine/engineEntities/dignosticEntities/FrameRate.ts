
import { frameRate } from "../../../store/store";
import { ICanvasEntity } from "../../base/ICanvasEntity";



export class FrameRate extends ICanvasEntity {
  frameRate: number = 0;
  constructor() {
    super();
    this.frameRate = 0;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.font="48px";
    this.ctx.fillText(`${this.frameRate}`, 10, 10);
  }
  update() {
    this.frameRate = frameRate.get();
  }
}




