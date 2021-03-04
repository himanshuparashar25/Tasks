import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addwith';
  firstNum: any;
  secondNum: any;
  result: any;

  addNumber(){
    this.result = parseInt(this.firstNum) + parseInt(this.secondNum);
  }
  subNumber(){
    this.result = parseInt(this.firstNum) - parseInt(this.secondNum);
  }
  multiplyNumber(){
    this.result = parseInt(this.firstNum) * parseInt(this.secondNum);
  }
  divideNumber(){
    this.result = parseInt(this.firstNum) / parseInt(this.secondNum);
  }
  percentNumber(){
    this.result = parseInt(this.firstNum) % parseInt(this.secondNum);
  }
}
