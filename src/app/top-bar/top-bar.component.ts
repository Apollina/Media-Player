import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
