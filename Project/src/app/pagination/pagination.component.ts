import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  swService : StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  onNext(){
    console.log('inside onNext');
    if(this.swService.res.next != null) {
    this.swService.fetchCharacters(this.swService.res.next);
    } else {
    alert('No more Data');
    }
  }
  onPrevious(){
    console.log('inside onPrevious');
    if(this.swService.res.previous != null) {
    this.swService.fetchCharacters(this.swService.res.previous);
    } else {
    alert('No more Data');
    }
  }

  ngOnInit() {
  }

}
