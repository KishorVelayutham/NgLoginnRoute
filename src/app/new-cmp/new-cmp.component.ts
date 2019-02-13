import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
newcomponent="Entered value by kishor";
 months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
isSetvariable=false;
 onClickEvent(event){
  alert("Button click");
  }
   todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  constructor() { }

  ngOnInit() {
  }

}
