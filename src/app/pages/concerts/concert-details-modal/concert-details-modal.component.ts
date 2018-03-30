import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-concert-details-modal',
  templateUrl: './concert-details-modal.component.html',
  styleUrls: ['./concert-details-modal.component.css']
})
export class ConcertDetailsModalComponent implements OnChanges {

  @Input()
  event: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event.currentValue) {
      this.event = changes.event.currentValue;
    }
  }
}
