import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ConfigService } from './config.service';
import { Config } from './Config';


@Injectable()
export class StarWarsService {

  private characters =[
    {name:'Luke Skywalker',side:''},
    {name:'Darth Wader',side:''},
    {name:'June Monto',side:''},
    {name:'Kaylie Warner',side:''}
  ];
  private logService : LogService;
  charactersChanged = new Subject<void>();
  http : HttpClient;
  config : ConfigService;
  configData : Config;

  constructor(logService :LogService , http :HttpClient,config:ConfigService){
    this.logService = logService;
    this.http = http;
    this.config = config;
  }

  showConfig() {
    this.config.getConfig()
      .subscribe((data : Config) => this.configData=  {
          results: data['results'],
          next:  data['next'],
          count:  data['count'],
          previous:  data['previous'],
          length:  data['lenght']
      });
    console.log('showconfig' + this.configData);
  }
  //call api to get characters

  fetchCharacters(){
    this.http.get('https://swapi.co/api/people/')
    .map((response: any)=>{
      const extarctedChars = response.results;
      const chars = extarctedChars.map((char)=>{
        return{name: char.name,side:''};
      });
      return chars;                   // This is passed to the subscribe
    }).subscribe(
      (data)=>
      {console.log(data);
       this.characters = data;
       this.charactersChanged.next();
      });
  }

  getCharacters(chosenList){
    if(chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) =>{
          return char.side === chosenList;
        })
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)=> {   //
        return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.wrieteLog('Changed side of ' + charInfo.name + ', new side :' + charInfo.side);
      }

      addCharacter(name,side){
        const pos= this.characters.findIndex((char)=> {   // returns -1 if not equal
          return char.name === name;
        });
        if(pos !== -1){
          return;
        }
        const newChar = {name:name,side:side};
        this.characters.push(newChar);
      }
    }
