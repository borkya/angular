import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

//import lodash;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

   @Input() items =[]; // = ['Apples','Bananas','Cherries'];

  newItem ='';
 // number ;

  @Output() updatedText = new EventEmitter<string>();
  onAddItemClick(){
  //  console.log('before' + this.newItem);
  //this.number = ._random(1,100);
  this.updatedText.emit(this.newItem);
  //  console.log('after' + this.newItem);

  }
}
