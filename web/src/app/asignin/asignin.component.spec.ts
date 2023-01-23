import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigninComponent } from './asignin.component';

describe('AsigninComponent', () => {
  let component: AsigninComponent;
  let fixture: ComponentFixture<AsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
