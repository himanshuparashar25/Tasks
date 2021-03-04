import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneAddTwoNoComponent } from './task-one-add-two-no/task-one-add-two-no.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneAddTwoNoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
