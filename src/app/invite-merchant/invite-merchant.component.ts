import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-merchant',
  templateUrl: './invite-merchant.component.html',
  styleUrls: ['./invite-merchant.component.scss']
})
export class InviteMerchantComponent implements OnInit {
  gridApi : any;
  gridColumnApi:any;
  constructor() { }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit()
  }
  ngOnInit() {
  }

}
