import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-time',
  standalone: true,
  templateUrl: './time.component.html',
  imports: [
    DatePipe
  ],
  styleUrl: './time.component.css'
})
export class TimeComponent  implements OnInit, OnDestroy {
  currentTime = new Date();

  private timer?: ReturnType<typeof setInterval>;
  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
