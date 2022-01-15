import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DropdownItem {
  selected: boolean;
  label: string;
  [key: string]: any;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  // The list to be iterated over
  @Input() dropdownList!: Array<DropdownItem> | undefined;

  // The selected dropdown item a user chooses
  @Output() selectedItem: EventEmitter<string | any> = new EventEmitter();

  // Place holder text
  @Input() placeholder!: string;

  // Action text
  @Input() actionText!: string;

  // Selected item label
  selectedItemLabel!: string | undefined;

  // Dropdown open state
  @Input() isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.placeholder !== undefined)
      this.selectedItemLabel = this.placeholder;

    this.dropdownList?.map((item: DropdownItem) => {
      const currentItem: DropdownItem = {
        ...item,
        selected: false,
        label: item.label,
      };

      this.dropdownList = this.dropdownList?.concat(currentItem);
    });
  }

  /**
   * Show dropdown list
   * @returns {void}
   */
  showDropDown(): void {
    this.isOpen = !this.isOpen;
  }

  /**
   * Selects a new dropdown entry
   * @param {DropdownItem}item - The selected dropdown item entry
   * @returns {void}
   */
  selectDropdownItem(item: any): void {
    // Traverse through the dropdown list and unselect all entries
    this.dropdownList?.map((item: DropdownItem) => (item.selected = false));

    // Select the clicked item
    item.selected = true;

    this.selectedItemLabel = item?.label;

    // Emit the selected dropdown item to the component using it
    this.selectedItem.emit(item);

    // Close dropdown
    this.isOpen = false;
  }
}
