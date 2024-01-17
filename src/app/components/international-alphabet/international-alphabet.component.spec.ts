import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalAlphabetComponent } from './international-alphabet.component';

describe('InternationalAlphabetComponent', () => {
  let component: InternationalAlphabetComponent;
  let fixture: ComponentFixture<InternationalAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalAlphabetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternationalAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
