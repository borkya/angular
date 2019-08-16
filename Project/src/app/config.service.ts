import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './Config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = './Config.JSON';


  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

}
