import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonguetwisterComponent } from './tonguetwister.component';

describe('TonguetwisterComponent', () => {
  let component: TonguetwisterComponent;
  let fixture: ComponentFixture<TonguetwisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonguetwisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonguetwisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
