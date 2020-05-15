import { Component, OnInit } from '@angular/core';
import { AllCallService } from 'src/app/services/all-call.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myForm: FormGroup;
  blogs:Array<any>=[]
  constructor(private allService : AllCallService) {
    this.myForm = new FormGroup({
      'name': new FormControl('' ,Validators.required),
      'comments': new FormControl('' ,Validators.required),
      'recipe': new FormControl('' ,Validators.required),
  })
   }

  ngOnInit(): void {
    this.allService.fetchAllBlogs()
    .subscribe((res:any)=> {
      console.log(res);
      this.blogs = res;
    })
  }

  
  addBlog(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.allService.addBlog(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
      
    });  
  }
}
