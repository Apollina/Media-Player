import { FavoriteService } from './services/favorite.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from "@angular/router";
import { MediaService } from "./services/media.service";
import { LoginService } from "./services/login.service";
import { UploadComponent } from './upload/upload.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import { MediaPlayerComponent } from './media-player/media-player.component';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'front',
    component: FrontComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'player/:id',
    component: MediaPlayerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe,
    MediaPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    LoginService,
    MediaService,
    FavoriteService,
    ThumbnailPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
