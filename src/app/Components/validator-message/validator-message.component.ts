import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.css']
})
export class ValidatorMessageComponent {
  @Input() displayError: boolean;
  @Input() errorText: string;
  @Input() classCheck: string;
}
