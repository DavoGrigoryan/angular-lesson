import {Component} from '@angular/core'

@Component({
  selector:"app-post",
  templateUrl:'./post.component.html',
  styleUrls:['./post.components.css']
})
export class PostComponent{
  inputValue='';
  onInput(event: any){
    this.inputValue=(<HTMLInputElement>event.target).value;
  }
  onClick11(){
    console.log('i')
  }
  onBlur(str: string){
    this.inputValue=str
  }
}
