import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordchainComponent } from './wordchain.component';

describe('WordchainComponent', () => {
  let component: WordchainComponent;
  let fixture: ComponentFixture<WordchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordchainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
