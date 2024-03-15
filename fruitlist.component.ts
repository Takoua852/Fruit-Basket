import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component'
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService)

  fontColorGood = 'green';
  fontColorBad = 'red';



  addComment(comment: string, index: number) {
    console.log(comment, index)
    this.fruitlistdata.addCommnetToFruit(comment, index);
  }

  nameLog(name: string) {
    console.log(name)
  }
}
