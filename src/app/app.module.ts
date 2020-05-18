import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlamelinkModule, FLContentModule, FLStorageModule } from 'ng-flamelink';
@NgModule({
  declarations: [
    AppComponent
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
          appId: '1:573446684696:web:fffb085c0e115d45a5036d'
        }
      }
    ),
    FLContentModule,
    FLStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
