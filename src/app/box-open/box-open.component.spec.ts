import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOpenComponent } from './box-open.component';

describe('BoxOpenComponent', () => {
  let component: BoxOpenComponent;
  let fixture: ComponentFixture<BoxOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
