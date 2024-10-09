import { Injectable } from '@angular/core';
import { IapService } from './iap.service';

@Injectable({
  providedIn: 'root'
})
export class IapServerService extends IapService {
  // do nothing in SSR

}
