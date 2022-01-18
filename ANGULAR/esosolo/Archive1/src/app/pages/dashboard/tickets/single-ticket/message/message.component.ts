import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  // Receives reactive form control object from parent page
  @Input() searchbarInput: FormControl | any = new FormControl('');
  @Input() searchbarSubmitFunction: void | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
