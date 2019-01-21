import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onClear(){
    // this._service.form.reset();
    // this._service.initializeFormGroup();
  }
}
