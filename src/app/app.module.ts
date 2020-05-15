import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DonateComponent } from './components/donate/donate.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BlogComponent } from './components/blog/blog.component';
import { RestrauntComponent } from './components/restraunt/restraunt.component';
import { EventComponent } from './components/event/event.component';
@NgModule({
  declarations: [
    AppComponent,
    //AdminComponent,
    DonateComponent,
    FeedbackComponent,
    BlogComponent,
    RestrauntComponent,
    EventComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // BrowserAnimationsModule,
    //MatSliderModule,
   // MatToolbarModule,
    //MatInputModule,
    FormsModule, ReactiveFormsModule,
    //MatCardModule,
    //MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
