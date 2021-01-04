import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleComponentComponent } from './puzzle-component.component';

describe('PuzzleComponentComponent', () => {
  let component: PuzzleComponentComponent;
  let fixture: ComponentFixture<PuzzleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
