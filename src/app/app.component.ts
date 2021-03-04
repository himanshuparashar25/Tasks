import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addwith';
  firstNum :string;
  SecondNum :string;
  result: number;

  addNumber(){
    this.result == parseInt(this.firstNum) + parseInt(this.SecondNum);
  }
  subNumber(){
    this.result == parseInt(this.firstNum) - parseInt(this.SecondNum);
  }
  multiplyNumber(){
    this.result == parseInt(this.firstNum) * parseInt(this.SecondNum);
  }
  divideNumber(){
    this.result == parseInt(this.firstNum) / parseInt(this.SecondNum);
  }
  percentNumber(){
    this.result == parseInt(this.firstNum) % parseInt(this.SecondNum);
  
}
