import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this._postService.getPostList().subscribe(
      (posts: any[]) => {
        this.dataSource =  new MatTableDataSource<any>(posts['data'])
      },
      err => {
        console.log(err)
    });
  }

  constructor(private _postService: PostService) {

  }
}

export interface Post {
  title: string;
  author: string;
  tags: string[];
  createdDateTime: string;
  post: string;
}
