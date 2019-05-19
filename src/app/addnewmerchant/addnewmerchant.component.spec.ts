import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmerchantComponent } from './addnewmerchant.component';

describe('AddnewmerchantComponent', () => {
  let component: AddnewmerchantComponent;
  let fixture: ComponentFixture<AddnewmerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewmerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
