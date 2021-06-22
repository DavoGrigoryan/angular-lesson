import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   inputValue=''
  img="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png";

  constructor() {
    setTimeout(()=>{
      this.img="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png"
    },3000)
  }


}
