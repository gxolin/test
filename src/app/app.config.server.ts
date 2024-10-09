import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { IapService } from './services/iap.service';
import { IapBrowserService } from './services/iap-browser.service';
import { IapServerService } from './services/iap-server.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: IapService,
      useClass: IapServerService
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
