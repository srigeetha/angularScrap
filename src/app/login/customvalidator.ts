import { AbstractControl } from '@angular/forms';

export function customvalidating(control : AbstractControl){

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp('^[0-9]{6}$');

        //console.log(control.root.get("email").value, "hiiiii");
        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}