import {Component, EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-my-progress',
  styleUrl: './my-progress.component.css',
  templateUrl: './my-progress.component.html',
})
export class MyProgressComponent {
  min = input<number>(0);
  max = input<number>(100);
  parentValue = input<number>(0);
  maxParentValue = input<number>(59);
  startValue = input<number>(0);
  value = input<number>(0);
  label = input<string>('');
  bgColor = input<string>('bg-success')

  numberWithCommas(x : number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
