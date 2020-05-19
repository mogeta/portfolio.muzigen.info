import {Component, OnInit} from '@angular/core';
import {FLContent} from 'ng-flamelink';

@Component({
  selector: 'app-tube-doc',
  templateUrl: './tube-doc.component.html',
  styleUrls: ['./tube-doc.component.css']
})
export class TubeDocComponent implements OnInit {

  public projects = this.content.valueChanges({
    schemaKey: 'yt_mbChannlel',
    // filters: [['category', '==', 'web']]
  });

  constructor(
    private content: FLContent
  ) {
    console.log(this.projects);
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
