import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-backdrop',
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss'],
})
export class ModalBackdropComponent implements OnInit {
  constructor() {}

  @Input() dontCloseModalByBackDrop: boolean = false;
  @Output() getCloseModalByBackDrop: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  handleCloseModalByBackDrop(method: boolean) {
    console.log(
      'close modal by background: ',
      this.dontCloseModalByBackDrop,
      method
    );

    if (!this.dontCloseModalByBackDrop) {
      this.dontCloseModalByBackDrop = method;
      this.getCloseModalByBackDrop.emit(method);
    }
  }

  CloseModalByButton(method: boolean) {
    this.dontCloseModalByBackDrop = method;
    this.getCloseModalByBackDrop.emit(method);
  }
}
