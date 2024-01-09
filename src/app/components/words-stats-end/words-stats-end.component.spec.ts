import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsStatsEndComponent } from './words-stats-end.component';

describe('WordsStatsEndComponent', () => {
  let component: WordsStatsEndComponent;
  let fixture: ComponentFixture<WordsStatsEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsStatsEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordsStatsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
