import { Component, OnInit } from '@angular/core';

     
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  job='Compound Intrest Calculator :-';
  principal_label="enter principal amount :-";
  rate_label="enter rate of intrest :-";
  time_label="enter no of years :-";
  principal_input = null;
  rate_input  = null;
  time_input = null;
  result=10;
   calculate() {
   // var P=document.getElementById("principal")?.innerHTML!;
    //var R=document.getElementById("rate")?.innerHTML!;
    //var T=document.getElementById("time")?.innerHTML!;
    //if(isNaN(P) && isNaN(R) && isNaN(T))
    alert("error");}
  constructor() { }

  ngOnInit(): void {
  }

}
