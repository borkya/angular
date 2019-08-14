import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 // @Input() characters;
 // @Output() sideAssigned = new EventEmitter<{name:string,side:string}>();
 characters= [];
 activatedRoute :ActivatedRoute;
 swService:StarWarsService;

  constructor(activatedRoute:ActivatedRoute,swService:StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService= swService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.characters= this.swService.getCharacters(params.side)
      });
  }

}
