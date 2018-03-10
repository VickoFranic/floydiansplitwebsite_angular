import { Component, OnInit } from '@angular/core';
import { bandMembers } from './band-members';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  bandMembers = bandMembers;

  constructor() { }

  ngOnInit() {
  }

}
