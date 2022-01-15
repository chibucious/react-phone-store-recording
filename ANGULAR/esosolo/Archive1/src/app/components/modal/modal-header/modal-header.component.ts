import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  @Input() modalTitle!: string;
  @Input() modalSubtitle!: string;
  @Input() showModalCloseButton: boolean = true;
  @Output() closeModalByButtonEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() alignHeader: 'left' | null = null;
  @Input() showSubtitle: 'noShow' | null = null;

  modalHeaderContentClass!: string;
  modalSubtitleClass!: string;

  constructor() {}

  closeModalByButton() {
    this.closeModalByButtonEvent.emit(false);
  }

  ngOnInit(): void {
    this.modalHeaderContentClass = `modal-header-content ${this.alignHeader}`;

    this.modalSubtitleClass = `cardSubtitle ${this.showSubtitle}`;
  }
}
