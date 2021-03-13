import { context, frameRate } from "../store/store";

class ICanvasEntity {
  constructor() {
    this.ctx = document.querySelector("canvas").getContext("2d");
    this.delay = 1000;
    this.waiting = false;
    this.draw.bind(this);
    this.update.bind(this);
  }
  draw() {}
  update() {}
}

export class FrameRate extends ICanvasEntity {
  constructor() {
    super();
    this.framerate = 0;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillText(this.framerate, 10, 10);
  }
  update() {
    this.framerate = frameRate.get();
  }
}

export function CanvasEngine({ Entities: [] }) {
  const Canvas = context.get();
  const Entities = new EntityList();
  Entities.addEntity(new FrameRate());
  function drawAll() {
    Entities.getEntities().forEach((entity, index) => {
      entity.draw();
    });
  }
  function updateAll() {
    Entities.getEntities().forEach((entity, index) => {
      entity.update();
    });
  }
  return {
    drawAll,
    updateAll,
  };
}

class EntityList {
  constructor() {
    this.Entities = [];
  }
  getEntities() {
    return this.Entities;
  }

  getEntity(index) {
    return this.Entities[index];
  }
  addEntity(entity) {
    this.Entities.push(entity);
  }
  replaceEntity(index, entity) {
    return (this.Entities[index] = entity);
  }
  removeEntity(index) {
    this.Entities.splice(index, 1);
  }
}
