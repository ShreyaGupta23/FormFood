import { Component, OnInit } from '@angular/core';
import { AllCallService } from 'src/app/services/all-call.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  myForm: FormGroup;
  feedbacks:Array<any>=[]
  constructor(private allService : AllCallService) {
    this.myForm = new FormGroup({
      'name': new FormControl('' ,Validators.required),
      'comments': new FormControl('' ,Validators.required),
      'rating': new FormControl('' ,Validators.required),
  })
   }

  ngOnInit(): void {
    this.allService.fetchAllFeedback()
    .subscribe((res:any)=> {
      console.log(res);
      this.feedbacks = res;
    })
  }
  addFeedback(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.allService.addFeedback(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
      
    });  
  }
}
