import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpOptionsInterface,
  HttpServiceErrorInterface,
} from './http.client.types';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  /**
   * Handles all http get request calls
   * @param {string} url        The http get url
   * @param {any} httpOptions   The http options to use for the current call
   * @returns {Observable<any>} Returns an observable of type any
   */
  public get(url: string, httpOptions?: HttpOptionsInterface): Observable<any> {
    return this.http
      .get(url, httpOptions)
      .pipe(catchError(this.catchError<any>('https')));
  }

  /**
   * Handles all http get request calls
   * @param {string} url        The http get url
   * @param {any} httpOptions   The http options to use for the current call
   * @returns {Observable<any>} Returns an observable of type any
   */
  public post(
    url: string,
    body: any,
    httpOptions: HttpOptionsInterface
  ): Observable<any> {
    return this.http
      .post(url, body, httpOptions)
      .pipe(catchError(this.catchError<any>('https')));
  }

  /**
   * Catch local http error and return value to subscribers
   * @param errorType The the type of operation been performed
   * @returns {HttpServiceErrorInterface} Returns error values
   */
  private catchError<HttpServiceErrorInterface>(errorType: string = 'http') {
    return (error: any): Observable<HttpServiceErrorInterface> => {
      console.log(error, 'error value');

      /** Error response formatter
       * @todo use a proper response service or method in the future
       */
      const errorValue: any = {
        status: error.status ?? 0,
        error: error.statusText ?? 'An unknown error occurs',
        errorType: errorType,
        message: error.message,
      };

      return of(errorValue as HttpServiceErrorInterface);
    };
  }
}
