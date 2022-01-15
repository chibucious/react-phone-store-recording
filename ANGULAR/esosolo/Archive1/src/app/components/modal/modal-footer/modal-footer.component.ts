import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss'],
})
export class ModalFooterComponent implements OnInit {
  @Input() footerTitle!: string;
  @Input() footerSubtitle!: string;
  @Input() footerLink: string = '/';
  @Input() alignFooter: 'left' | null = null;
  @Input() showFooterSubtitle: 'noShow' | null = null;

  modalFooterContentClass!: string;
  modalFooterSubtitleClass!: string;

  constructor() {}

  ngOnInit(): void {
    this.modalFooterContentClass = `modal-footer-content ${this.alignFooter}`;

    this.modalFooterSubtitleClass = `cardSubtitle ${this.showFooterSubtitle}`;
  }
}
