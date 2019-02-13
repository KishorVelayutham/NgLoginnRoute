import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule, MatMenuModule, MatSidenavModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';

import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';

//import { MaterialComponentComponent } from './material-component/material-component.component';
const appRoutes: Routes = [
   {
      path: '',
      component: UserloginComponent
   },
   {
      path: 'app-mainpage',
      component: MainpageComponent
   }
];
//,MatButtonModule, MatMenuModule, MatSidenavModule,MatDatepickerModule, MatNativeDateModule
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      UserloginComponent,
      MainpageComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
