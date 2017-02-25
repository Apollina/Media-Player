import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  constructor(private loginService: LoginService) { }

  register = (value: any) => {
    this.loginService.setUser(value);
    this.loginService.register();
  }
}
