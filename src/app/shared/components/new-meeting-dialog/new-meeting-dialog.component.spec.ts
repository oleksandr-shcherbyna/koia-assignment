import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetingDialogComponent } from './new-meeting-dialog.component';

describe('NewMeetingDialogComponent', () => {
  let component: NewMeetingDialogComponent;
  let fixture: ComponentFixture<NewMeetingDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMeetingDialogComponent]
    });
    fixture = TestBed.createComponent(NewMeetingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
