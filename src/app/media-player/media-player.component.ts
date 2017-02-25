import { FavoriteService } from './../services/favorite.service';
import { LoginService } from './../services/login.service';
import { ThumbnailPipe } from './../pipes/thumbnail.pipe';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
})
export class MediaPlayerComponent implements OnInit {

  private id: number;
  private click: any = {};
  private favouriteList: any = [];
  private likes: any = 0;
  private likeCount: any;

  private hasLiked: boolean = false;

  constructor(private mediaService: MediaService,
              private route: ActivatedRoute,
              private thumbnailPipe: ThumbnailPipe,
              private loginService: LoginService,
              private favoriteService: FavoriteService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });

    if (!this.loginService.logged)
      this.router.navigate(['login']);

    this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;
      }
    );

    this.mediaService.getMediaByID(this.id)
      .subscribe(
        res => {
          this.click = res;
          this.mediaService.getUser(this.click.user_id)
            .subscribe(
              resp => {
                this.click.username = resp.username;
              });
          console.log(this.click);
        });

    this.favoriteService.getFavouriteByFile(this.id)
      .subscribe(
        res => {
          this.favouriteList = res;
          console.log(this.favouriteList);
          for (let favourite of this.favouriteList) {
            if (this.loginService.getUser().user_id === favourite.user_id) {
              this.hasLiked = true;
            }
          }
        });

    this.favoriteService.getFavouriteByFile(this.id).subscribe(
      res => {
        this.likes = res;
        console.log(this.likes);
        this.likeCount = this.likes.length;
      }
    );
  }

    putLike = () => {
      if (!this.hasLiked) {
        let param: any = {};
        param.file_id = +this.id;
        this.favoriteService.createFavorite(param)
          .subscribe(res => {
            this.hasLiked = !this.hasLiked;
          });
      } else {
        this.favoriteService.deleteFavorite(this.id)
          .subscribe(res => {
            this.hasLiked = !this.hasLiked;
          });
      }

    }

}
