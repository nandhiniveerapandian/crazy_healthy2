import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreviewsComponent } from './areviews.component';

describe('AreviewsComponent', () => {
  let component: AreviewsComponent;
  let fixture: ComponentFixture<AreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
