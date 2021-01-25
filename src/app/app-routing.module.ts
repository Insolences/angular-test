import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegistrationComponent } from './page-registration/page-registration.component';
import { FinalPageComponent } from './final-page/final-page.component';

const routes: Routes = [
  { path: '', component: PageRegistrationComponent },
  { path: 'final', component: FinalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
