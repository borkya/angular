import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      DashboardComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
