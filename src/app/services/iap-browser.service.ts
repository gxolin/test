import { Injectable } from '@angular/core';
import { IapService } from './iap.service';

// comment this line to be able to build
import 'cordova-plugin-purchase';

@Injectable({
  providedIn: 'root'
})
export class IapBrowserService extends IapService {

}
