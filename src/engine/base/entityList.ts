import { ICanvasEntity } from './ICanvasEntity';
export class EntityList {
  entities: ICanvasEntity[];
  constructor(entities: ICanvasEntity[]) {
    if (entities && entities.length!==0) {
      this.entities = entities;
    }else{
      this.entities=[];
    }
  }
  getEntities() {
    return this.entities;
  }

  getEntity(index: number) {
    return this.entities[index];
  }

  addEntity(entity: ICanvasEntity) {
    this.entities.push(entity);
  }
  replaceEntity(index: number, entity: ICanvasEntity) {
    return (this.entities[index] = entity);
  }
  removeEntity(index: number) {
    this.entities.splice(index, 1);
  }
}
