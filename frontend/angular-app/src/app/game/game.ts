import { Component, ViewChild } from '@angular/core'
// import {Env} from './logic/Env'

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})

export class Game {
  //gameEnv: Env;

  @ViewChild('canvas') canvas: any; // saved the canvas here

  get context(): CanvasRenderingContext2D { // virtual property 
    return this.canvas.nativeElement.getContext('2d') || new CanvasRenderingContext2D(); // to avoid '?'
  }

  ngAfterViewInit() { // because constructor would attempt to draw before html starts to render
    this.drawLine();
  }

  drawLine() {
    this.context.beginPath();
    this.context.moveTo(50, 50);
    this.context.lineTo(100, 120);
    this.context.strokeStyle = "white"; // to assign check presence
    this.context?.stroke();

  }


}
