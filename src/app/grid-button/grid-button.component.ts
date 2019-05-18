import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-button',
  template: "<button [id]='MID' class='btn btn-icon waves-effect waves-light btn-secondary m-b-5' (click)='alert()' ><i class='fa fa-edit'></i></button><button class='ml-2 btn btn-icon waves-effect waves-light btn-success m-b-5' [id]='MID' > <i class='fa fa-eye'></i></button>"

})
export class GridButtonComponent implements OnInit {
  public MID: string;
  agInit(params: any): void {
   this.MID = params;
}
alert() {
  console.log('succccccccccc')
}
  constructor() { }

  ngOnInit() {
  }

}
