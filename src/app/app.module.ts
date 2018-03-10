import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagesModule } from './pages/pages.module';
import { BandComponent } from './pages/band/band.component';
import { ConcertsComponent } from './pages/concerts/concerts.component';
import { AudioComponent } from './pages/audio/audio.component';
import { VideoComponent } from './pages/video/video.component';
import { ImagesComponent } from './pages/images/images.component';
import { PressPackComponent } from './pages/press-pack/press-pack.component';
import { BacklineComponent } from './pages/backline/backline.component';
import { StagePlanComponent } from './pages/stage-plan/stage-plan.component';
import { ContactBookingComponent } from './pages/contact-booking/contact-booking.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'bend', component: BandComponent },
  { path: 'koncerti', component: ConcertsComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'video', component: VideoComponent },
  { path: 'slike', component: ImagesComponent },
  { path: 'press-pack', component: PressPackComponent },
  { path: 'backline', component: BacklineComponent },
  { path: 'stage-plan', component: StagePlanComponent },
  { path: 'kontakt-booking', component: ContactBookingComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
