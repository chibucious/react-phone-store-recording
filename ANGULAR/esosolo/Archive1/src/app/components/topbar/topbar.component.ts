import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  // Receives reactive form control object from parent page
  @Input() searchbarInput: FormControl | any = new FormControl('');
  @Input() searchbarSubmitFunction: void | null = null;

  // Mobile menu emitter
  @Output() menuEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openMobileMenu() {
    this.menuEvent.emit(true);
  }
}
