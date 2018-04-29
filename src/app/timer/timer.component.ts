import { Component, OnInit } from '@angular/core';
import { Schedule,ProductService } from '../shared/product.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

    schedules:Schedule[];

  constructor(private productService:ProductService) { 
      

  }

  ngOnInit() {

      this.schedules = this.productService.getSchedules();
      // this.schedules = [
      //   new Schedule(1,9,'AM','Registration',''),
      //   new Schedule(2,10,'AM','Adam Wathan','Resisting Complexity'),
      // ]
  }

}
 // export class Schedule {
 //     constructor(
 //           public id: number,
 //           public timer: number,
 //           public solt:  string,
 //           public event: string,
 //           public describe: string
 //         ) {
 //     }
 // }