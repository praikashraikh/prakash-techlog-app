import { Component, OnInit, Inject } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {
  post: any;
  mode: string;
  title: string;
  postForm: FormGroup;
  public Editor = ClassicEditor;
  postContent: string = '';
  tags: string[] = [];
  allTags: string[] = ["NodeJs", "Angular", "Machine Learning"].sort();

  constructor(
    private fb: FormBuilder,
    private _postService: PostService,
    public dialogRef: MatDialogRef<PostListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.post = _.get(data, 'post');
    this.mode = _.get(data, 'mode');
    this.title = this.mode === 'add' ? 'Add Post' : 'Edit Post';
    this.tags = _.get(data, 'post.tags') || [];
    this.postContent = _.get(data, 'post.post') || [];
  }

  ngOnInit() {
    this._initializeForm();
  }

  onClose() {
    this.dialogRef.close();
  }

  savePost() {
    this._postService
      .savePost(this.mode, this.postForm.value, this.tags, this.postContent)
      .subscribe(

      );
  }

  public populateList(ev, val) {
    if (ev.checked) {
      this.tags.push(val);
    } else {
      const i = this.tags.indexOf(val);
      this.tags.splice(i, 1);
    }
  }

  private _initializeForm() {
    this.postForm = this.fb.group({
      id: [this.post._id || ''],
      title: [this.post.title || '', [Validators.required]],
      author: [this.post.author || '', [Validators.required]],
      post: [this.post.post || '', [Validators.required]]
    });
  }

}
