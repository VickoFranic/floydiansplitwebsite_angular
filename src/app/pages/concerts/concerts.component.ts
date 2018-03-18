import { Component, OnInit } from '@angular/core';
import { FacebookEventsService } from '../../services/facebook-events.service';
import { FacebookResponse } from '../../interfaces/facebook-response';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  isLoading = true;
  futureEventsList: any = [];
  pastEventsList: any = [];

  constructor(private facebookEventsService: FacebookEventsService) { }

  ngOnInit() {
    this.getEventsList();
  }

  getEventsList() {
    return this.facebookEventsService.getAllEvents()
      .subscribe((response: FacebookResponse) => {
        (response.data).forEach(event => {
          if (new Date(event.start_time) > new Date()) {
            this.futureEventsList.push(event);
          }
          else {
            this.pastEventsList.push(event);
          }
          this.isLoading = false;
        });
      });
  }
}
