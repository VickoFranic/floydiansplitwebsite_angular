import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pages = {
    '/': 'FLOYDIAN SPLIT | ' + (new Date()).getFullYear(),
    '/bend': 'BEND',
    '/koncerti': 'KONCERTI',
    '/audio': 'AUDIO',
    '/video': 'VIDEO',
    '/slike': 'SLIKE',
    '/press-pack': 'PRESS PACK',
    '/backline': 'BACKLINE',
    '/stage-plan': 'STAGE PLAN',
    'kontakt-booking': 'KONTAKT/BOOKING',
    '/login': 'LOGIN'
  };

  pageTitle: string = '';

  constructor(private router: Router) {
    router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.pageTitle = this.pages[value.url];
      }
    });
  }

  ngOnInit() {
  }

}
