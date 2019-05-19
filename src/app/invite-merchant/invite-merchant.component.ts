import { Component, OnInit, ViewChild } from '@angular/core';
import { InviteMerchantService } from './invite-merchant.service';
import { InviteNewMerchantComponentComponent } from '../invite-new-merchant-component/invite-new-merchant-component.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InviteMerchantData } from './inviteMechant'
import { MerchantData } from '../Model/MerchantData';
@Component({
  selector: 'app-invite-merchant',
  templateUrl: './invite-merchant.component.html',
  styleUrls: ['./invite-merchant.component.scss']
})
export class InviteMerchantComponent implements OnInit {
  @ViewChild('content') content: any;
  private gridApi;
  private gridColumnApi;
  private frameworkComponents;
  private context;
  public invite: InviteMerchantData;
  closeResult: string;
  merchantDetails: string;
  columnDefs = [
    { headerName: 'S.No', field: 'InviteId', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Mobile', field: 'phone', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Action', colId: "params", field: 'InviteId', cellRenderer: "GridButtonComponent" }
  ];
  rowData: InviteMerchantData[];
  public Addinvite : InviteMerchantData;
  
  constructor(private InviteMerchantService: InviteMerchantService, private modalService: NgbModal) {
    this.context = { componentParent: this };
 
    this.frameworkComponents = {
      GridButtonComponent: InviteNewMerchantComponentComponent
    };

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit()
  }


  methodFromParent(paramns) {
    if( paramns.InviteId == 0){
      this.Addinvite = { name:"" , phone:"" , email:"" , InviteId:this.rowData.length + 1};
    }else {
      this.Addinvite = { name:paramns.name , phone:paramns.phone , email:paramns.email , InviteId:paramns.InviteId};
    }
   
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = "";
    });
  }
  CloseinviteMerchant() {
    this.modalService.dismissAll();
  }
  SendInvite(inv) {
    this.rowData.push(inv);;
    this.modalService.dismissAll();
    this.gridApi.setRowData(this.rowData);
  }
  ngOnInit() {
    this.InviteMerchantService.getMerchantRowData().subscribe((data) => this.rowData = data);
   this.Addinvite = { name:"" , phone:"" , email:"" , InviteId:this.rowData.length + 1};;
  }
  
}
