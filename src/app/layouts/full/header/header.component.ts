import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(private router: Router, private _loginService: LoginService){}

  signOut() {
    this._loginService.logout();
    this.router.navigate(['login']);
  }
}
