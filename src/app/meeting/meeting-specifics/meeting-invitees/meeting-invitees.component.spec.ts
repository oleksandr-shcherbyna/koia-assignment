import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInviteesComponent } from './meeting-invitees.component';

describe('MeetingInviteesComponent', () => {
  let component: MeetingInviteesComponent;
  let fixture: ComponentFixture<MeetingInviteesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingInviteesComponent]
    });
    fixture = TestBed.createComponent(MeetingInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
