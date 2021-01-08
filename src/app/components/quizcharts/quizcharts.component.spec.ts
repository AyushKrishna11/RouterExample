import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizchartsComponent } from './quizcharts.component';

describe('QuizchartsComponent', () => {
  let component: QuizchartsComponent;
  let fixture: ComponentFixture<QuizchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
