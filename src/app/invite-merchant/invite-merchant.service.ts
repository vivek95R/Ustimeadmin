import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InviteMerchantData } from "./inviteMechant"
@Injectable({
  providedIn: 'root'
})
export class InviteMerchantService {
  rowData : InviteMerchantData[];
  constructor() {
    this.rowData = [
      { InviteId: 1, name: 'KFC', phone: '123', email: '123@123.com' },
      { InviteId: 2, name: 'MCDD', phone: '321', email: '123@123.com' },
      { InviteId: 3, name: 'ABS', phone: '546', email: '123@123.com' }
    ];

   }

 
  getMerchantRowData(): Observable<InviteMerchantData[]> {
    return of<InviteMerchantData[]>(this.rowData);
  }
}
