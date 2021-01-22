import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})

export class ModalComponent {
  @Input() handleCloseModal: any;
}

