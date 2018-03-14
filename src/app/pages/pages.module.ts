import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BandComponent } from './band/band.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { PressPackComponent } from './press-pack/press-pack.component';
import { BacklineComponent } from './backline/backline.component';
import { StagePlanComponent } from './stage-plan/stage-plan.component';
import { ContactBookingComponent } from './contact-booking/contact-booking.component';
import { ImagesComponent } from './images/images.component';
import { RecordSpinnerComponent } from './landing-page/record-spinner/record-spinner.component';
import { FacebookEventsService } from '../services/facebook-events.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, BandComponent, ConcertsComponent, AudioComponent, VideoComponent, PressPackComponent, BacklineComponent, StagePlanComponent, ContactBookingComponent, ImagesComponent, RecordSpinnerComponent],
  providers: [
    FacebookEventsService
  ]
})
export class PagesModule { }
