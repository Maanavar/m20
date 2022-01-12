import { FormGroup } from '@angular/forms';

export default class Validation {
static match(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.matching) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ matching: true });
            return { matching: true };
        } else {
            matchingControl.setErrors(null);
            return null;
        }
    }
}
}