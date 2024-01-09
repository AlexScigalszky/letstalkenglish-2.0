import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborativeStoryComponent } from './colaborative-story.component';

describe('ColaborativeStoryComponent', () => {
  let component: ColaborativeStoryComponent;
  let fixture: ComponentFixture<ColaborativeStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaborativeStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaborativeStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
