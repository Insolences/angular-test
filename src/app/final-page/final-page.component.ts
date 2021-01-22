import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent {
  @Input() displayError: boolean;
  @Input() errorText: string;
  @Input() classCheck: string;
}
