import { Component, OnInit } from '@angular/core';
import {AllCallService} from 'src/app/services/all-call.service'
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
events:Array<any>=[]
  constructor(private allService : AllCallService) { }

  ngOnInit(): void {
    this.allService.fetchAllEvents()
    .subscribe((res:any)=> {
      console.log(res);
      this.events = res;
    })
  }

}
