import {AfterViewInit, Component, ViewChild, ViewContainerRef ,OnInit} from "@angular/core";
import {ICellEditorAngularComp} from "ag-grid-angular";
@Component({
  selector: 'app-gridbittoneditor',
  template: '<div>sdfsdfsdf</div>',
  styleUrls: ['./gridbittoneditor.component.scss']
})
export class GridbittoneditorComponent  implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  @ViewChild('container', {read: ViewContainerRef}) public container;
  public happy: boolean = false;
  constructor() { }
  ngAfterViewInit() {
    window.setTimeout(() => {
        this.container.element.nativeElement.focus();
    })
}
getValue(): any {
  return this.happy ? "Happy" : "Sad";
}
agInit(params: any): void {
  this.params = params;
  alert(params);
}
  ngOnInit() {
  }

}
