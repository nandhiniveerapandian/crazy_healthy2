import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcustomersComponent } from './acustomers.component';

describe('AcustomersComponent', () => {
  let component: AcustomersComponent;
  let fixture: ComponentFixture<AcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
