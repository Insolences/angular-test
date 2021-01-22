import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import {InfoContainerComponent} from './info-container/info-container.component';
import {FirstPageFormComponent} from './first-page-form/first-page-form.component';
import {SecondPageFormComponent} from './second-page-form/second-page-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorMessageComponent} from './Components/validator-message/validator-message.component';
import {FirstPageRegistrationComponent} from './first-page-registration/first-page-registration.component';
import {FinalPageComponent} from './final-page/final-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ModalComponent} from './modal/modal';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationContainerComponent,
    InfoContainerComponent,
    FirstPageFormComponent,
    SecondPageFormComponent,
    ValidatorMessageComponent,
    FirstPageRegistrationComponent,
    FinalPageComponent,
    ModalComponent
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
