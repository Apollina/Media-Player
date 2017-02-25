import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { MediaService } from "../services/media.service";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
})
export class FrontComponent implements OnInit {

  private images: any = [];

  constructor(private loginService: LoginService, private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    if (!this.loginService.logged)
      this.router.navigate(['login']);

    this.mediaService.getMedia().subscribe(
      res => {
        this.images = res;
      }
    );
  }

  setClickedMedia = (id: number) => {
    console.log(id);
    this.router.navigate(['/player', id]);
  }
}
