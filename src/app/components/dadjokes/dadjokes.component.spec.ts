import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadjokesComponent } from './dadjokes.component';

describe('DadjokesComponent', () => {
  let component: DadjokesComponent;
  let fixture: ComponentFixture<DadjokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadjokesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadjokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
