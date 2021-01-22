import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-second-page-form',
  templateUrl: './second-page-form.component.html',
  styleUrls: ['./second-page-form.component.css']
})

export class SecondPageFormComponent implements OnInit {
  public userForm: FormGroup;
  formSubmitAttempt = false;
  showModal = false;
  @Output() backForm = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      company: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, this.phoneValidator()]],
      password: ['', [Validators.required]],
      checkPrivacy: ['', [Validators.requiredTrue]]
    });
  }

  private phoneValidator(): ValidatorFn {
    const pattern: RegExp = /[0-9]/;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
      }
    };
  }

  onSubmit() {
    console.log(this.userForm);
    this.formSubmitAttempt = true;

    if (this.userForm.valid) {
      this.router.navigate(['/final']);
    } else {
      console.log('dont send');
    }
  }

  isFieldInvalid(field: string): boolean {
    return this.formSubmitAttempt && this.userForm.get(field).invalid;
  }
  handleShowModal(){
    this.showModal = true;
  }
  handleCloseModal(){
    this.showModal = false;
  }
  handleBackToFirstPage(){
    this.backForm.emit(true);
  }
}
