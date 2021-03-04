import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneAddTwoNoComponent } from './task-one-add-two-no.component';

describe('TaskOneAddTwoNoComponent', () => {
  let component: TaskOneAddTwoNoComponent;
  let fixture: ComponentFixture<TaskOneAddTwoNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOneAddTwoNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOneAddTwoNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
