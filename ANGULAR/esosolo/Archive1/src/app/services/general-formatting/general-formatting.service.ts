import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralFormattingService {
  constructor() {}

  /**
   * Adds a comma to a number after three places or three zeros
   * @param number - the number to be separated by commas
   * @returns {number | string}
   */
  addCommaToNumbers = (number: any): number | string => {
    if (!number) return 0;

    /**
     * process the decimal value by spliting number into an array
     * if number splits to an array of lenght=2, then this number has decimal place
     *  */
    const numberArr = number.toString().split('.');
    let decimal = null;
    if (numberArr.length === 2) {
      number = numberArr[0];

      /** the second value is the decimal. we will save it for later use */
      decimal = numberArr[1];
    }

    if (typeof number !== 'string') {
      /** Convert numbers to string */
      number = `${number}`;
    }

    if (typeof number === 'string') {
      number = number.split('');
      let newNumber = '',
        lastItem = number.length - 1,
        comma = ',',
        counter = 0;

      for (let i = lastItem; i >= 0; i--) {
        counter += 1;
        if (counter % 3 === 0 && i > 0) {
          newNumber = `${comma}${number[i]}` + newNumber;
        } else {
          newNumber = number[i] + newNumber;
        }
      }
      return decimal ? `${newNumber}.${decimal}` : newNumber;
    } else {
      return number;
    }
  };

  /**
   * A function to strip value of all formating commas
   * @param {*} string
   * @returns
   */
  removeCommas = (string: any) => {
    let newString;
    newString = string.replace(/,/, '');
    return newString;
  };
}
