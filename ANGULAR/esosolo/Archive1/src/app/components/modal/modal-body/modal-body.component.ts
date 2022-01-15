import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
})
export class ModalBodyComponent implements OnInit {
  @Input() compressed: 'compressed' | null = null;

  modalBodyClass!: string;

  constructor() {}

  ngOnInit(): void {
    this.modalBodyClass = `modal-body-wrapper ${this.compressed}`;
  }
}
