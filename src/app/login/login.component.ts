import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private user: any = {};

  constructor(private loginService: LoginService, private router: Router, private _location: Location) { }

  ngOnInit() {

    if (localStorage.getItem("user") !== null){
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.logged = true;
      console.log("No need to login");
      this.router.navigate(['front']);
    } else if (this.loginService.getUser().password !== undefined){
      this.loginService.login();
    }
  }

  login = (value: any) => {
    console.log(value);
    this.loginService.setUser(value);
    this.loginService.login();
  }

}
