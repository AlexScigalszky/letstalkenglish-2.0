import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreviationsComponent } from './abreviations.component';

describe('AbreviationsComponent', () => {
  let component: AbreviationsComponent;
  let fixture: ComponentFixture<AbreviationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbreviationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbreviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
