import { Component, OnInit } from '@angular/core';
import { VIDEO_LIST } from './video-list';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: any;
  selectedVideo: any;

  constructor(public sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.videos = VIDEO_LIST;
  }

  showVideo(video) {
    this.selectedVideo = video;
  }

}
