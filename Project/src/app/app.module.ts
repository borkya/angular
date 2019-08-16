import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './config.service';
import { PaginationComponent } from './pagination/pagination.component';

const routes  = [
  {path:'characters', component:TabsComponent,children:[
    {path:'', redirectTo:'all',pathMatch:'full'},
    {path:':side', component:ListComponent}
      ]},
  {path:'new-character', component:CreateCharacterComponent},
  // {path:'**', component:TabsComponent}
  // {path:'**', redirectTo:'/'}
  {path:'**', redirectTo:'/characters'}
];

@NgModule({
   declarations: [
      AppComponent,
      TabsComponent,
      ListComponent,
      ItemComponent,
      CreateCharacterComponent,
      HeaderComponent,
      PaginationComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes),
      HttpClientModule
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
