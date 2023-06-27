import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateDate(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (!control.value) { 
            return {'dateNotPicked': true}; 
        }
        
        const currentDate = new Date();
        const dateToCheck = new Date(control.value);
        return dateToCheck > currentDate ? null : {'incorrectMeetingDate': true};
    };
}