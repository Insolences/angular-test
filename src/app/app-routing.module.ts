import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstPageRegistrationComponent} from './first-page-registration/first-page-registration.component';
import {FinalPageComponent} from './final-page/final-page.component';

const routes: Routes = [
  { path: '', component: FirstPageRegistrationComponent },
  { path: 'final', component: FinalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
