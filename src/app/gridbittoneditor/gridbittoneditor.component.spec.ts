import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbittoneditorComponent } from './gridbittoneditor.component';

describe('GridbittoneditorComponent', () => {
  let component: GridbittoneditorComponent;
  let fixture: ComponentFixture<GridbittoneditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridbittoneditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridbittoneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
