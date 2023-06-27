import { ValidatorFn, Validators } from "@angular/forms";

import { validateUrl } from "src/app/shared/validators/url.validator";

export enum MeetingLocationsEnum {
    ADRESS = 'meetingAdress',
    ONLINE = 'meetingOnline',
}

export interface MeetingLocationValidatorsDto {
    [key: string]: ValidatorFn[],
}

export const meetingTypeValidators: MeetingLocationValidatorsDto = {
    meetingAdress: [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    meetingOnline: [Validators.required, validateUrl()],
}

export interface BoardGuestsDto {
    guestName: string;
    position: string;
}

export interface MeetingDto {
    meetingType: string,
    meetingName: string;
    meetingDate: Date;
    meetingStartTime: string;
    meetingEndTime: string;
    meetingLocationType: {
        meetingAdress: string;
        meetingOnline: string;
    };
    meetingTasks: string[];
    meetingBoardInvites: string[];
}

export interface NewMeetingDialogData {
    newMeeting: MeetingDto;
}