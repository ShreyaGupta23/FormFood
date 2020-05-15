import { Component, OnInit } from '@angular/core';
import { AllCallService } from 'src/app/services/all-call.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  myForm: FormGroup;
  donation:Array<any>=[]
  constructor(private allService : AllCallService) {
    this.myForm = new FormGroup({
      'helper': new FormControl('' ,Validators.required),
      'location': new FormControl('' ,Validators.required),
      'description': new FormControl('' ,Validators.required),
      'contact': new FormControl('' ,Validators.required),
     'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
     'image_logo': new FormControl('' ,Validators.required),
  })
   }

  ngOnInit(): void {
    this.allService.fetchAllDonate()
    .subscribe((res:any)=> {
      console.log(res);
      this.donation = res;
    })
   }
   addDonate(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.allService.addDonate(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
      
    });  
  }

}
