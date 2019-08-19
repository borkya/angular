import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './config.service';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      TabsComponent,
      ListComponent,
      ItemComponent,
      HeaderComponent,
      PaginationComponent
   ],
   imports: [
      BrowserModule,       // this module can be imported only once in app. it fprovies ngIf etc. which can be provided by CommonModule
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      StarWarsService,
      LogService,
      ConfigService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
