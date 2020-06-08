import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-you-tube-player',
  templateUrl: './you-tube-player.component.html',
  styleUrls: ['./you-tube-player.component.css']
})
export class YouTubePlayerComponent implements OnInit {

  public youTubeID;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.youTubeID = id;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // this.targetID = this.route.snapshot.queryParams.target;
    // console.log(this.targetID);
  }

}
