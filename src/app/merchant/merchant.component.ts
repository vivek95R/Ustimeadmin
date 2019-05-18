import { Component, OnInit } from '@angular/core';
import { MerchantService } from './merchant.service';
import { MerchantData } from './../Model/MerchantData';
import {GridButtonComponent} from '../grid-button/grid-button.component'
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private frameworkComponents;
  constructor(private merchantService: MerchantService) {
    this.frameworkComponents = {
      GridButtonComponent : GridButtonComponent
    };


   }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit()
  }
  rowData: any;
  columnDefs = [
    { headerName: 'S.No', field: 'serialno', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Location', field: 'location', sortable: true, filter: true },
    { headerName: 'Subscription', field: 'subscription', sortable: true, filter: true },
    { headerName: 'Partner Since', field: 'partnersince', sortable: true, filter: true },
    { headerName: 'Action', field: 'action' ,  cellRenderer: "GridButtonComponent"}
  ];
  
  
  ngOnInit() {
    this.merchantService.getMerchantRowData().subscribe((data) => this.rowData = data);
  }
 
}
