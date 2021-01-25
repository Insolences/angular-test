import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import {InfoContainerComponent} from './info-container/info-container.component';
import {FirstFormPageComponent} from './first-page-form/first-form-page.component';
import {SecondFormPageComponent} from './second-page-form/second-form-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorMessageComponent} from './Components/validator-message/validator-message.component';
import {PageRegistrationComponent} from './page-registration/page-registration.component';
import {FinalPageComponent} from './final-page/final-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ModalComponent} from './modal/modal';
import {ValidateFieldPipe} from "./pipes/validate-field.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationContainerComponent,
    InfoContainerComponent,
    FirstFormPageComponent,
    SecondFormPageComponent,
    ValidatorMessageComponent,
    PageRegistrationComponent,
    FinalPageComponent,
    ModalComponent,
    ValidateFieldPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
