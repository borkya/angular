import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  loadState = 'loading';
  ngOnInit() {
  }
  onClick(){
this.loadState = 'Finished';
  }
  onUSerInput(event){
    this.loadState = event.target.value;

  }
}
