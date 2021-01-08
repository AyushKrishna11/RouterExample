import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleaddComponent } from './puzzleadd.component';

describe('PuzzleaddComponent', () => {
  let component: PuzzleaddComponent;
  let fixture: ComponentFixture<PuzzleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
