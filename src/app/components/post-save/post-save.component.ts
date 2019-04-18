import { Component, OnInit, Inject } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostService } from '../../services/post/post.service';
import { FormMessageViewModel } from '../../models/form.message.model';
import { ImageService } from '../../services/image/image.service';
import { UploadService } from '../../services/ck-editor/upload.service';

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
  formMessage = new FormMessageViewModel();
  imageUrl: string = '';
  config: any;
  postEditor: any;

  constructor(
    private fb: FormBuilder,
    private _postService: PostService,
    private _imageService: ImageService,
    public dialogRef: MatDialogRef<PostListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.post = _.get(data, 'post');
    this.mode = _.get(data, 'mode');
    this.title = this.mode === 'add' ? 'Add Post' : 'Edit Post';
    this.tags = _.get(data, 'post.tags') || [];
    this.postContent = _.get(data, 'post.post') || '';
  }

  ngOnInit() {
    this._initializeForm();

    ClassicEditor
    .create( document.querySelector( '#editor' ), {
      extraPlugins: [ this.MyCustomUploadAdapterPlugin ]})
    .then( editor => {
        console.log( editor );
        this.postEditor = editor;
    } )
    .catch( error => {
        console.error( error );
    } );
  }

  MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        // Configure the URL to the upload script in your back-end here!
        return new UploadService( loader, 'http://localhost:3000/api/v1/admin/upload' );
    };
}

  onClose() {
    this.dialogRef.close();
  }

  savePost() {
    this._postService
      .savePost(this.mode, this.postForm.value, this.tags, this.postEditor.getData(), this.imageUrl)
      .subscribe(result => {
        this._postService.loadPosts();
        this.dialogRef.close();
      }, err =>{
        this.formMessage.type = 'fail';
        this.formMessage.message = 'Failed to save Post.';
      });
  }

  selectedFile: ImageSnippet = { src: '', file: null, pending: false, status: ''};

  private onSuccess(){
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError(){
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this._imageService.uploadImage(this.selectedFile.file).subscribe(
        (res: any) => {
          this.imageUrl = res.imageUrl;
          this.onSuccess();
        },
        (err) => {
          this.onError();
          console.log(err);
        }
        );
    })

    reader.readAsDataURL(file);

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

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
