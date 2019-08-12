import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  rootName ='Maximillan';
  rootItems =['Apple','Banana','Cherri'];
  onNameChanged(newName){
    this.rootName = newName;
  }
  onItemChanged(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);

  }
}
