import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');

    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params });
  }

  //   createPost(){
  //     const data = Post = {
  //       id:null,
  //       userId:23,
  //       title: 'My New Post',
  //       body: 'Hello world!'
  //     }
  //     public newPost | string;
  //     this.newPost = this.http.post(this.ROOT_URL + '/posts', data);
  //
  //   }
  title = 'Application created by Serban Online shopping';
}
