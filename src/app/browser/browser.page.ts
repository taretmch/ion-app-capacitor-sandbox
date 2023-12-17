import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage {

  constructor() { }

  openBrowser(): void {
    Browser.open({ url: 'https://capacitorjs.com/' });
  }
}
