import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTasksComponent } from './meeting-tasks.component';

describe('MeetingTasksComponent', () => {
  let component: MeetingTasksComponent;
  let fixture: ComponentFixture<MeetingTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingTasksComponent]
    });
    fixture = TestBed.createComponent(MeetingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
