import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ChangeDetectionStrategy,
  AfterContentChecked,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-modal-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss'],
})
export class ModalWrapperComponent implements OnInit, AfterContentChecked {
  // Action events
  @Input() wrapperCanShowModal: boolean = false;
  @Input() wrapperCanCloseModalByBackDrop!: boolean;
  @Input() wrapperShowModalCloseButton: boolean = true;
  @Output() emitModalClosed: EventEmitter<any> = new EventEmitter();

  // Modal header content
  @Input() wrapperModalTitle!: string;
  @Input() wrapperModalSubtitle!: string;
  @Input() wrapperAlignHeader: 'left' | null = null;
  @Input() wrapperShowModalSubtitle: 'noShow' | null = null;

  // Modal footer content
  @Input() showModalFooter: boolean = true;
  @Input() wrapperFooterTitle!: string;
  @Input() wrapperFooterSubtitle!: string;
  @Input() wrapperFooterLink: string = '/';
  @Input() wrapperAlignFooter: 'left' | null = null;
  @Input() wrapperShowFooterSubtitle: 'noShow' | null = null;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cd.markForCheck();
    console.log('show modal backg: ', this.wrapperCanShowModal);
  }

  setCanShowModal(method: boolean) {
    this.wrapperCanShowModal = method;
    this.emitModalClosed.emit(true);
    this.cd.markForCheck();
  }
}
