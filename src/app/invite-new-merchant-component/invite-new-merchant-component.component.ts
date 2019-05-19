import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
@Component({
  selector: 'app-invite-new-merchant-component',
  template: "<button [id]='MID' (click)='invokeParentMethod()' class='btn btn-icon waves-effect waves-light btn-secondary m-b-5'><i class='fa fa-edit'></i></button><button class='ml-2 btn btn-icon waves-effect waves-light btn-success m-b-5' [id]='MID' > <i class='fa fa-eye'></i></button>"

})
export class InviteNewMerchantComponentComponent implements ICellRendererAngularComp {
  public params: any;
  agInit(params: any): void {
    this.params = params;
}

public invokeParentMethod() {
  this.params.context.componentParent.methodFromParent(this.params.node.data)
}
  constructor() { }

  ngOnInit() {
  }
  refresh(): boolean {
    return false;
}

}
