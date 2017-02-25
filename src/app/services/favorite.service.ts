import { MediaService } from './media.service';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class FavoriteService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: string = '';

  constructor(
    private http: Http,
    private mediaService: MediaService,
    private router: Router,
    private loginService: LoginService
  ) { }

  getFavouriteByFile = (id: number) => {
    return this.http.get(this.url + '/favourites/file/' + id)
      .map(
      res =>
        res.json()
      );
  };

  createFavorite = (id: any) => {
    this.token = this.loginService.getUser().token;
    return this.http.post(this.url + '/favourites?token=' + this.token, id)
      .map(
      res => {
        res.json();
      });
  }

  deleteFavorite = (id: any) => {
    this.token = this.loginService.getUser().token;
    return this.http.delete(this.url + '/favourites/file/' + id + '?token=' + this.token)
      .map(
      res => {
        res.json();
      });
  }

}
