import { Component, OnInit } from '@angular/core';
import { MerchantService } from './merchant.service';
import { MerchantData } from './../Model/MerchantData';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  constructor(private merchantService: MerchantService) { }
  rowData : any;
  columnDefs = [
    {headerName: 'S.No', field: 'serialno', sortable: true, filter: true },
    {headerName: 'Name', field: 'name', sortable: true, filter: true },
    {headerName: 'Location', field: 'location', sortable: true, filter: true },
    {headerName: 'Subscription', field: 'subscription', sortable: true, filter: true },
    {headerName: 'Partner Since', field: 'partnersince', sortable: true, filter: true },
    {headerName: 'Action', field: 'action', sortable: true, filter: true }
    ];

  ngOnInit() {
   this.merchantService.getMerchantRowData().subscribe((data) => this.rowData = data); 
  }
  

}
