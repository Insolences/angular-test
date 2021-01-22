import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.css']
})
export class RegistrationContainerComponent {
  @Input() nextPage: boolean;
  public next = true;
  goToNextForm(value: boolean){
    this.next = value;
  }
}
