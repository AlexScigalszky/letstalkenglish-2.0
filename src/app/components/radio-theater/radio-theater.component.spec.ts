import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTheaterComponent } from './radio-theater.component';

describe('RadioTheaterComponent', () => {
  let component: RadioTheaterComponent;
  let fixture: ComponentFixture<RadioTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
