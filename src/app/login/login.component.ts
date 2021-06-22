import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title='text'

  backgroundToggle=false;


  // onInput(event:any){
  //   this.title=event.target.value;
  // }
}
