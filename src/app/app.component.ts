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

  posts: Observable<any> | undefined;
  constructor(private http: HttpClient) {}

  title = 'Application created by Serban Online shopping';
}
