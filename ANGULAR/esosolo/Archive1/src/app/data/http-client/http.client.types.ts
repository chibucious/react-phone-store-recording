import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Error interface definition
 */
export type HttpServiceErrorInterface = {
  error: boolean;
  message: string;
  code: number;
};

export interface HttpOptionsInterface {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      }
    | undefined;
  responseType?: 'json';
  context?: HttpContext | undefined;
  observe?: 'body' | undefined;
  params?: HttpParams | any | undefined;
  reportProgress?: boolean | undefined;

  withCredentials?: boolean | undefined;
}
