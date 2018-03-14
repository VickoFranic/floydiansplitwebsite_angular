import { Component, OnInit } from '@angular/core';
import { FacebookEventsService } from '../../services/facebook-events.service';
import { FacebookResponse } from '../../interfaces/facebook-response';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  eventsList: any = [];

  constructor(private facebookEventsService: FacebookEventsService) { }

  ngOnInit() {
    this.getEventsList();
  }

  getEventsList() {
    this.facebookEventsService.getAllEvents()
      .subscribe((response: FacebookResponse) => { 
        this.eventsList = response.data;
      });
  }
}
