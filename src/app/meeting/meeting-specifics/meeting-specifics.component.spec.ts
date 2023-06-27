import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSpecificsComponent } from './meeting-specifics.component';

describe('MeetingSpecificsComponent', () => {
  let component: MeetingSpecificsComponent;
  let fixture: ComponentFixture<MeetingSpecificsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingSpecificsComponent]
    });
    fixture = TestBed.createComponent(MeetingSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
