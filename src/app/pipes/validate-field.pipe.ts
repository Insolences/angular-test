// @ts-ignore
import {Pipe, PipeTransform} from "@angular/core";
import {FormGroup} from "@angular/forms";

interface ArgsPipe {
    formIsSubmitted?: boolean;
    form: FormGroup;
    fieldName: string;
    fieldValue: string;
}

@Pipe({name: 'validateField'})
export class ValidateFieldPipe implements PipeTransform {
    transform(args: ArgsPipe): boolean {
        return args.formIsSubmitted && args.form.get(args.fieldName).invalid;
    }
}
