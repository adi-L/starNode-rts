import { FrameRate } from '../engineEntities/dignosticEntities/FrameRate';
import { EntityList } from "../base/entityList";
import { ICanvasEntity } from '../base/ICanvasEntity';

interface IEngineConfig{
  entities?:ICanvasEntity[];
  frameRate?:boolean;
}

export function CanvasEngine(config:IEngineConfig) {
  //const Canvas = context.get();
  const entities:EntityList = new EntityList(config.entities);

  if (config.frameRate) {
    entities.addEntity(new FrameRate());
  }

  function drawAll() {
    entities.getEntities().forEach((entity, index) => {
      entity.draw();
    });
  }
  function updateAll() {
    entities.getEntities().forEach((entity, index) => {
      entity.update();
      entity.rules(entities.getEntities());
    });
    
  }
  return {
    drawAll,
    updateAll,
  };
}
