import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Donate} from 'src/app/models/donate';
import {Blog} from 'src/app/models/blog';
import {Feedback} from 'src/app/models/feedback';
const donateUrl = 'http://localhost:8000/api/donate/'
const blogUrl = 'http://localhost:8000/api/blog/'
const feedbackUrl='http://localhost:8000/api/feedback/make/'
const feed='http://localhost:8000/api/feedback/allfeeds/'
const event='http://localhost:8000/api/events/allevents/'
@Injectable({
  providedIn: 'root'
})
export class AllCallService {

  constructor(private http: HttpClient) {}
  fetchAllEvents(){
    return this.http.get(event);
  }
  fetchAllBlogs(){
    return this.http.get(blogUrl);
  }
  fetchAllFeedback(){
    return this.http.get(feed);
  }
  fetchAllDonate(){
    return this.http.get(donateUrl);
  }
  addDonate(donate: Donate){
    console.log('In service : ', donate)
    return this.http.post(donateUrl, 
      donate,{observe : 'response'})

  }
  addBlog(blog: Blog){
    console.log('In service : ', blog)
    return this.http.post(blogUrl, 
      blog,{observe : 'response'})

  }
  addFeedback(feed: Feedback){
    console.log('In service : ', feed)
    return this.http.post(feedbackUrl, 
      feed,{observe : 'response'})

  }
}
