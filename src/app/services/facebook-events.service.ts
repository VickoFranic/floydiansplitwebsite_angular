import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FacebookEventsService {

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get(environment.apiUrl + '/facebook/events');
  }

  getEventDetails(id: string) {
    return this.http.get(environment.apiUrl + '/facebook/events/' + id);
  }
}