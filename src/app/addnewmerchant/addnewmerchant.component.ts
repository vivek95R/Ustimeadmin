import { Component, OnInit ,ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-addnewmerchant',
  templateUrl: './addnewmerchant.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./addnewmerchant.component.scss']
})
export class AddnewmerchantComponent implements OnInit {
  @ViewChild('ngbTabset') t: any;
  thirdtab:boolean = true;
  enable(){
    this.thirdtab =false;
    this.t.select('tab-selectbyid2')
  }
  constructor() { }

  ngOnInit() {
  }

}
