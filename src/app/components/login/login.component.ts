import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormMessageViewModel } from '../../models/form.message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  saveMessage: FormMessageViewModel = <any>{};

  constructor(private fb: FormBuilder, private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    this._initializeForm();
  }

  private _initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.controls[key].markAsTouched();
      });
      return false;
    }

    this._loginService.login(this.loginForm.value).subscribe(valid => {
      if (valid) {
        this.router.navigate(['posts']);
      } else {
        this.saveMessage.type = 'fail';
        this.saveMessage.message = 'Invalid username/password!!';
      }
    });
  }
}
