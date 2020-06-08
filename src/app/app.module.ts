import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlamelinkModule, FLContentModule, FLStorageModule } from 'ng-flamelink';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { TubeDocComponent } from './tube-doc/tube-doc.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YouTubePlayerComponent } from './you-tube-player/you-tube-player.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    TubeDocComponent,
    DashboardComponent,
    YouTubePlayerComponent
  ],
  imports: [
    BrowserModule,
    FlamelinkModule.initialize(
      {
        dbType: 'cf', // Cloud Firestore or 'rtdb' for Real-Time Database
        firebaseApp: {
          apiKey: 'AIzaSyDO54xPlsyYDVYhLFlrA46Io5nt32ruF3I',
          authDomain: 'portfolio-14ea4.firebaseapp.com',
          databaseURL: 'https://portfolio-14ea4.firebaseio.com',
          projectId: 'portfolio-14ea4',
          storageBucket: 'portfolio-14ea4.appspot.com',
          messagingSenderId: '573446684696',
          appId: '1:573446684696:web:fffb085c0e115d45a5036d',
          measurementId: 'G-3PB77BL3YR'
        }
      }
    ),
    FLContentModule,
    FLStorageModule,
    AppRoutingModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
