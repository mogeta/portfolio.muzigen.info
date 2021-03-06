import { Component, OnInit } from '@angular/core';
import {FLContent} from 'ng-flamelink';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  public projects = this.content.valueChanges({
    schemaKey: 'develop',
    // filters: [['category', '==', 'web']]
  });

  constructor(
    private content: FLContent
  ) {
    console.log(this.projects);
  }

  ngOnInit(): void {
  }

}
