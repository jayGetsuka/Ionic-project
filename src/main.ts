import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

if (environment.production) {
  enableProdMode();
}

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
