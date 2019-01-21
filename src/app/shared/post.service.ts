import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    author: new FormControl(''),
    description: new FormControl('', Validators.required),
    publish: new FormControl('1'),
    dateCreated: new FormControl(''),
    tags: new FormControl('')
  });

  initializeFormGroup() {
    console.log('Reset form.........');
    this.form.setValue({
      $key: null,
      title: '',
      author: '',
      description: '',
      publish: '',
      dateCreated: '',
      tags: ''
    });
  }

}
