
import {Unit} from '../unit/unit';
import {screen} from '../store/store';
let randomPose = 1;
export class Clan {

    constructor(props = {}) {
        this.player = props.player || "AI" //TODO: enum
        this.color = getRandomColor()
         this.flag = "",
         this.name = props.name;
         this.units = [new Unit(screen.getWidth() >> 1, screen.getHeight() >> randomPose++)];
         this.selectedUnits = [];
         this.buildings = [] // should be with units ? 
    }
}
export const TYPE = {
    AI:"AI",
    PLAYER:"PLAYER"
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  