import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddByAddressComponent } from './add-by-address.component';

describe('AddByAddressComponent', () => {
  let component: AddByAddressComponent;
  let fixture: ComponentFixture<AddByAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddByAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddByAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
