import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
