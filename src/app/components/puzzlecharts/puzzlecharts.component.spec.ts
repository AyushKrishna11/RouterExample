import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlechartsComponent } from './puzzlecharts.component';

describe('PuzzlechartsComponent', () => {
  let component: PuzzlechartsComponent;
  let fixture: ComponentFixture<PuzzlechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlechartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
