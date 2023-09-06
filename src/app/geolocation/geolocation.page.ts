import { Component } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: 'geolocation.page.html',
  styleUrls: ['geolocation.page.scss'],
})
export class GeolocationPage {

  coordinates: Position | null = null;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.coordinates = coordinates;
  }
}
