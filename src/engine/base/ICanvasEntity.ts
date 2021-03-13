import { EntityList } from './entityList';

export abstract class ICanvasEntity {
  ctx:CanvasRenderingContext2D  = document.querySelector("canvas").getContext("2d") as CanvasRenderingContext2D ;
  delay:number = 1000;
  waiting:boolean = false;
  constructor()
  {
    this.update.bind(this);
    this.draw.bind(this);
    this.rules.bind(this);
  }
  draw(){}
  update(){}
  rules(entityList:ICanvasEntity[]){}
}