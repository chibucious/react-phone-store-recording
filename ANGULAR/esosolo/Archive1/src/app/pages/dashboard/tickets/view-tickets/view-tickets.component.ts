import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {

  TicketUsersInterface,
} from './view-tickets.types';


// import {Router} from '@angular/router'; 
// import router from angular router

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {
  

  ticketholderList!: Array<TicketUsersInterface>;

  // The sub component selected
  selectedComponentView!: string;

  // Receives reactive form control object from parent page
  @Input() searchbarInput: FormControl | any = new FormControl('');
  @Input() searchbarSubmitFunction: void | null = null;

  @Output() componentSelectedRoute: EventEmitter<any> = new EventEmitter();

  // Page cards styling
  isGrid: boolean = false;

  constructor(private formatting: GeneralFormattingService) { }

  ngOnInit(): void {

    // The datatypes for icon, name, userid ... was defined in view-tickets.types.ts
    this.ticketholderList = [
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Hanson',
        userid: 20796,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 10, 2011 11:22',
        priority: 'Low',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Gram',
        userid: 1331,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 4, 2019 21:42',
        priority: 'Medium',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Curtis',
        userid: 18599,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 2, 2019 05:18',
        priority: 'High',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Jenna',
        userid: 45904,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 1, 2019 07:52',
        priority: 'Low',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Jim',
        userid: 95554,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Feb 02, 2019 19:28',
        priority: 'Low',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Hanson',
        userid: 23340,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 7, 2019 23:26',
        priority: 'Low',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Aaron',
        userid: 23340,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 07, 2019 23:26',
        priority: 'Low',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Sander',
        userid: 23340,
        subject: 'Product...',
        assinees1: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees2: '../../../../../assets/icons/custom-icons/user-img.png',
        assinees3: '../../../../../assets/icons/custom-icons/user-img.png',
        activity: 'Dec 07, 2019 23:26',
        priority: 'Low',
        status: true,
      }
    ]

  }

  toogleMenuState(state: boolean) {
    this.isGrid = state;
  }

  selectTicketholder(ticketholder: TicketUsersInterface) {
    this.componentSelectedRoute.emit({
      route: `/dashboard/tickets/view-tickets/${ticketholder.name}`,
      data: ticketholder,
    });
  }

  
  
  // selectTicket(id: any) {
  //   // alert(id);
  //   this.route.navigate(['dashboard/tickets/viewmessage']); // navigate to other page
    
     
  // }

   // Listen for selected dropdown items
   listenForChangeInDurationDropdown(item: any) {
    console.log('selected item from duration dropdown: ', item);
  }

  // Listen for selected dropdown items
  closeSubChildPage(isClose: boolean) {
    isClose &&
      this.componentSelectedRoute.emit({
        route: '/dashboard/tickets/view-tickets',
        data: {},
      });
  }

  

}
