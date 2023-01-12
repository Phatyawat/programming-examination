import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostItem } from './model-post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList:PostItem[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPostList()
  }

  getPostList(){
    this.GetPost().subscribe({
      next: (res: PostItem[] ) => {
       this.postList = res;
      }
    });
  }

  GetPost() {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
