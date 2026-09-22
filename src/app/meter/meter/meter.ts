import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import {MyProgressComponent} from '../../sharedComponent/myprogress/my-progress.component/my-progress.component';

@Component({
  imports: [DatePipe,MyProgressComponent],
  selector: 'app-meter',
  styleUrl: './meter.css',
  templateUrl: './meter.html',
})
export class Meter implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
currentTime : Date = new Date();
currentSecond : number  =0;
  currentMinute : number  =0;
  currentHour : number  =0;
  currentDay : number  =0;
  currentMonth : number  =0;
  currentYear : number  =0;
  maxDay : number  =0;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getCurrentTime();
      });
  }

  getCurrentTime(): void {
    const now = new Date();

    this.currentTime = now;
    this.currentSecond = now.getSeconds();
    this.currentMinute = now.getMinutes();
    this.currentHour = now.getHours();

    // วันที่ 1-31
    this.currentDay = now.getDate();

    // เดือน 1-12
    this.currentMonth = now.getMonth() + 1;

    this.currentYear = now.getFullYear();

    // จำนวนวันของเดือนปัจจุบัน
    this.maxDay = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();
    this.cdr.detectChanges();

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
getDayOfMonth(month : number, year : number){
    const  kom: number[] = [1,3,5,7,8,10,12];
    const pan = 2;
    if(month === pan) return year % 4 ===0 ? 29 : 28;
    if(kom.includes(month)) return  31;
    return  30;
}
getDayOfYear(inputYear : number){
  return   inputYear % 4 ===0 ? 366:365;
}

getCurrentDayOfYear(date: Date = new Date()): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);

    const diff = date.getTime() - startOfYear.getTime();

    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  }
  getCurrentSecondOfDay(){
    return (this.currentHour*3600)+(this.currentMinute*60)+this.currentSecond;
  }
  GetSecondOfDay(){
    return 86400;
  }
}
