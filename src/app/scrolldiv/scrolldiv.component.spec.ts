import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolldivComponent } from './scrolldiv.component';

describe('ScrolldivComponent', () => {
  let component: ScrolldivComponent;
  let fixture: ComponentFixture<ScrolldivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrolldivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrolldivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
