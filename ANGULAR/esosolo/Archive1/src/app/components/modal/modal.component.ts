import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from 'src/app/services/message/modal.service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  @Input() noCloseBkg: boolean = false;
  @Output() showModalTemplate = new EventEmitter<boolean>();

  ngOnInit(): void {}

  closeModal() {
    if (this.noCloseBkg === false) this.showModalTemplate.emit(false);
  }
}
