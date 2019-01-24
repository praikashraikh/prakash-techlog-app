import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PostService } from '../../services/post/post.service';
import { PostSaveComponent } from '../post-save/post-save.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'tags', 'createdDateTime', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this._postService.getPostList().subscribe(
      (posts: any[]) => {
        this.dataSource = new MatTableDataSource<any>(posts['data'])
      },
      err => {
        console.log(err)
      });
  }

  updatePost(mode, post = null): void {
    if (!post) {
      post = {title: '', author: '', post: '', tags: []};
    }

    const dialogRef = this.dialog.open(PostSaveComponent, {
      minWidth: '40%',
      data: { post: post, mode: mode }
    });
  }
}
export interface Post {
  title: string;
  author: string;
  tags: string[];
  createdDateTime: string;
  post: string;
}
