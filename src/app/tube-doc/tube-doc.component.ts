import {Component, OnInit} from '@angular/core';
import {FLContent} from 'ng-flamelink';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tube-doc',
  templateUrl: './tube-doc.component.html',
  styleUrls: ['./tube-doc.component.css']
})
export class TubeDocComponent implements OnInit {
  private targetID = '';
  public projects;

  constructor(
    private content: FLContent,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.targetID = this.route.snapshot.queryParams.target;
    console.log(this.targetID);
    this.projects = this.content.valueChanges({
      schemaKey: this.targetID,
      // filters: [['category', '==', 'web']]
    });
  }

}
