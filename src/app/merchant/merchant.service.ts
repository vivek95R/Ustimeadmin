import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MerchantData } from './../Model/MerchantData';

@Injectable({
    providedIn: 'root'
  })

  export class MerchantService {

    constructor(private http: HttpClient) { 
    }

    rowData = [
        { serialno: '1', name: 'KFC', location: 'Melbourne', subscription: 'paid', partnersince: 'MAR2019'},
        { serialno: '2', name: 'McDonald', location: 'Sydney', subscription: 'paid', partnersince: 'APR2019'}
    ];
    getMerchantRowData(): Observable<MerchantData[]> {
        return of<MerchantData[]>(this.rowData);
    }
  }