import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-form',
  templateUrl: './first-page-form.component.html',
  styleUrls: ['./first-page-form.component.css']
})

export class FirstPageFormComponent implements OnInit {
  public userForm: FormGroup;
  formSubmitAttempt = false;
  @Output() nextForm = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(e): void {
    e.preventDefault();
    this.formSubmitAttempt = true;
    if (this.userForm.valid) {
      this.nextForm.emit(false);
    } else {
      console.log('dont send');
    }
  }

  isFieldInvalid(field: string): boolean {
    return this.formSubmitAttempt && this.userForm.get(field).invalid;
  }
}
