import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoYouDrawComponent } from './how-do-you-draw.component';

describe('HowDoYouDrawComponent', () => {
  let component: HowDoYouDrawComponent;
  let fixture: ComponentFixture<HowDoYouDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowDoYouDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowDoYouDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
