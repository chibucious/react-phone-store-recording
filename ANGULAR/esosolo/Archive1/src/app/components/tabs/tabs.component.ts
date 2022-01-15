import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface Tab {
  tabId: string;
  tabText: string;
  selected: boolean;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input() tabsList!: Array<Tab>;
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.changePageSection();
  }

  /**
   *  Change page section
   *
   * @author Prince Akpabio - <princeakpabio90@gmail.com>
   *
   * @description - This helper function routes to a different page section when called by repopulating the userCardList array with a new set of values.
   *
   * @returns void
   */
  changePageSection(): void {
    // Pick all card titles
    const cardTitles = document.querySelectorAll('.tab');

    /** Traverse through the card title elements and remove the 'selected' class from the class list of any element which has it and add it to the card title clicked/selected */
    cardTitles.forEach((cardTitle) => {
      cardTitle.addEventListener('click', () => {
        // Remove the 'selected' class from any card title that already has in among its class list
        this.checkPreviousSelectedCardTitle();

        // Add to card title class list that is clicked and doesn't have the 'selected' class
        cardTitle.classList.add('selected');

        // Update the users card list to change the section content
        this.updateTabContent(cardTitle.id);
      });
    });
  }

  /**
   *  Remove 'selected' class from previous card title
   *
   * @author Prince Akpabio - <princeakpabio90@gmail.com>
   *
   * @description - This helper function removes the selected class from the previous card title hence making it available to be added to the currently selected card title.
   *
   * @returns void
   */
  checkPreviousSelectedCardTitle(): void {
    // Pick all card titles
    const cardTitles = document.querySelectorAll('.tab');

    cardTitles.forEach((cardTitle) => {
      // Remove the 'selected' class from any card title that already has in among its class list
      if (cardTitle.classList.contains('selected')) {
        cardTitle.classList.remove('selected');
      }
    });
  }

  /**
   * Update section tab content
   *
   * @author Prince Akpabio - <princeakpabio90@gmail.com>
   *
   * @description Using the card title ID of a section, we update the section template variable in order to show our desired template
   *
   * @param {string} sectionId The ID of the card title and section we want shown
   *
   * @returns void
   */
  updateTabContent(sectionId: string): void {
    this.tabsList.map((tab: Tab) => {
      if (tab.tabId == sectionId) {
        this.tabSelected.emit(tab.tabId);
      }
    });
  }
}
