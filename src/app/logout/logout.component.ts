import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("user");
    this.loginService.logged = false;
    this.router.navigate(['login']);
  }

}
