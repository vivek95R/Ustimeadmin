import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
public dateyear : number;

  constructor() {
    this.dateyear = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
