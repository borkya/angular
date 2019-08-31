import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

import { map, catchError }  from 'rxjs/operators';
import { Post } from './post.model';
import { post } from 'selenium-webdriver/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log('inside onCreatePost');
    this.http
      .post(
        'https://angularproject-16d5b.firebaseio.com/posts.json',
        postData, {
          observe : 'response'
               }
       ).subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
   }
   fetchPosts(){
    this.isFetching = true;
    this.http.get('https://angularproject-16d5b.firebaseio.com/posts.json',
    {
      headers : new HttpHeaders({'Custom-Header':'Hello', 'mama':'mia'}),
      params : new HttpParams().set('print','pretty')
    }
    )
    .pipe(map((responseData :{[key:string] : Post }) =>{
      const postArray : Post[] =[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({ ...responseData[key] , id :key});
             }
          }
          return postArray;
    }),catchError(errorRes=>{
      errorRes.message ='test';
      return throwError(errorRes);
    }))
    .subscribe(posts => {
        console.log(posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
          this.error = error.message;
          this.isFetching = false;
      });
   }

  onClearPosts() {
    // Send Http request
  }
  onOkay(){
    this.error = false;
  }
}
