import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnavComponent } from './cnav.component';

describe('CnavComponent', () => {
  let component: CnavComponent;
  let fixture: ComponentFixture<CnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
