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
  result=null;
   calculate() {
    var str = "Please enter ";
    var flag = 0;
    if(this.principal_input==null)
    {
      str+="Principal ";
      flag=1;
    }
    if(this.rate_input==null)
    {
      str+="rate ";
      flag=1;
    }
    if(this.time_input==null)
    {
      str+="time ";
      flag=1;
    }
    if(flag=1){
      alert(str);
      return;
    }
   var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/calculator/calculate";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res = xhr.responseText;
            if(document.getElementById( "result" )){
            document.getElementById( "result" )!.innerHTML=res;
          }          
            console.log(res);

        }
    }
    var data =JSON.stringify({
      "principal" : this.principal_input,
      "rate" : this.rate_input,
      "time" : this.time_input
  });
xhr.send(data);
/*const dataToSend = JSON.stringify({
  "principal" : 1000,
  "rate" : 0.05,
  "time" : 3
});
let dataReceived = ""; 
fetch("http://localhost:8080/calculator/calculate", {//lvl/4200/lcl8080
     credentials: "same-origin",
     mode: "same-origin",
     method: "get",
     headers: { "Content-Type": "application/json" },
     body: dataToSend
})

    .then(resp => {
        if (resp.status === 200) {
            return resp.json()
        } else {
            console.log("Status: " + resp.status)
            return Promise.reject("server")
        }
    })
    .then(dataJson => {
        dataReceived = JSON.parse(dataJson)
    })
    .catch(err => {
        if (err === "server") return
        console.log(err)
    })

  console.log(`Received: ${dataReceived}`)*/  }

  constructor() { }

  ngOnInit(): void {
  }

}
