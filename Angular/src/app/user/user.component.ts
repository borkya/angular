import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  constructor() { }

  @Input() name;
  @Output() nameChanged  = new EventEmitter<string>();
     onUserInput(event){
  //  this.name = event.target.value;
      this.nameChanged.emit(event.target.value);

  }


}
