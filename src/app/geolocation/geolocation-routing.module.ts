import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocationPage } from './geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocationPageRoutingModule {}
