import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviewproductComponent } from './cviewproduct.component';

describe('CviewproductComponent', () => {
  let component: CviewproductComponent;
  let fixture: ComponentFixture<CviewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviewproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CviewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
