import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular4-app';
  onClickEvent(event){
  alert("Button click");
  }
  todaydate;
constructor() {}
   ngOnInit() {
 
   }
}