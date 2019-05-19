import { Component, OnInit , ViewChild } from '@angular/core';
import { MerchantService } from './merchant.service';
import { GridButtonComponent } from '../grid-button/grid-button.component';
import { GridbittoneditorComponent } from '../gridbittoneditor/gridbittoneditor.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent  {
  @ViewChild('content') content: any;
  private gridApi;
  private gridColumnApi;
  private frameworkComponents;
  private context;
  closeResult: string;
  merchantDetails : string;
  constructor(private merchantService: MerchantService,
              private modalService: NgbModal) {

            
    this.frameworkComponents = {
      GridbittoneditorComponent: GridbittoneditorComponent,
      GridButtonComponent:GridButtonComponent
    };
    this.context = { componentParent: this };
  }
  open(content) {
    this.modalService.open(content, { size: 'sm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  methodFromParent(paramns) {
    this.merchantDetails = 'vivek'
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
    { headerName: 'Action', colId: "params" ,field:'serialno', cellRenderer: "GridButtonComponent", cellEditor: "GridbittoneditorComponent", }
  ]; 

  ngOnInit() {
    this.merchantService.getMerchantRowData().subscribe((data) => this.rowData = data);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
