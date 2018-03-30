import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FacebookEventsService } from '../../../services/facebook-events.service';

@Component({
  selector: 'app-concert-details-modal',
  templateUrl: './concert-details-modal.component.html',
  styleUrls: ['./concert-details-modal.component.css']
})
export class ConcertDetailsModalComponent implements OnChanges {

  @Input()
  event: any;
  details: any;

  constructor(private facebookEventsService: FacebookEventsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event.currentValue) {
      this.event = changes.event.currentValue;

      this.facebookEventsService.getEventDetails(this.event.id)
        .subscribe(response => this.details = response);
    }
  }
}
