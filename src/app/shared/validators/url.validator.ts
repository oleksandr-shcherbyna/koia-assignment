import { AbstractControl, ValidatorFn } from '@angular/forms';

import { validatorPatterns } from '../dto/validator.patterns';

export function validateUrl(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (!control.value) { return null }
        return validatorPatterns.invalidUrl.test(control.value) ? null : {'invalidUrl': true};
    };
}