import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IapService } from './services/iap.service';
import { IapBrowserService } from './services/iap-browser.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true
    }),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: IapService,
      useClass: IapBrowserService
    }
  ]
};
