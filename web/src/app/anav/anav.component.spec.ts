import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnavComponent } from './anav.component';

describe('AnavComponent', () => {
  let component: AnavComponent;
  let fixture: ComponentFixture<AnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
