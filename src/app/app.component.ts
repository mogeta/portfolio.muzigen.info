import { Component } from '@angular/core';
import {FLContent} from 'ng-flamelink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public projects = this.content.valueChanges({
    schemaKey: 'projects',
    // filters: [['category', '==', 'web']]
  });

  constructor(
    private content: FLContent
  ) {
    console.log(this.projects);
  }

}
