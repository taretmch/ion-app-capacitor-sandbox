import { Component } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-geolocation',
  templateUrl: 'geolocation.page.html',
  styleUrls: ['geolocation.page.scss'],
  standalone: true,
  imports: [IonicModule],
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
