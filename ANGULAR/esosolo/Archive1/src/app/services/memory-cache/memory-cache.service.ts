import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemoryCacheService {
  // The storage location type the cache service will leverage
  storageLocation!: any;

  constructor() {
    this.initService();
  }

  /**
   * Sets up the correct cache storage type to be used by the app. If local storage was selected eariler in a former brower session, the app will take note of this and persist the former storage type.
   * @returns {void}
   */
  private initService(): void {
    let storageLocationSession = sessionStorage.getItem(
      'storageLocation'
    ) as string;

    let storageLocationLocal = localStorage.getItem(
      'storageLocation'
    ) as string;

    if (storageLocationLocal == 'null' || storageLocationLocal == null) {
      this.storageLocation = sessionStorage;
      localStorage.setItem('storageLocation', 'null');
    } else if (
      storageLocationSession == 'null' ||
      storageLocationSession == null
    ) {
      this.storageLocation = localStorage;
      sessionStorage.setItem('storageLocation', 'null');
    } else {
      this.storageLocation = sessionStorage;
      localStorage.setItem('storageLocation', 'null');
    }
  }

  /**
   * Add a value to the cache
   * @param {string} key
   * @param {string} value
   */
  public put(key: string, value: any) {
    this.storageLocation.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrive a value from cache using its key
   * @param {string} key
   */
  public get(key: string) {
    const value = JSON.parse(this.storageLocation?.getItem(key) as string);
    return value;
  }

  /**
   * Choose which storage location to be used by the cache service
   * @param isChangeLocation - when true, the local storage is used to persist app data across multiple browser sessions, while when false session storage stores app data for the duration of a browser session
   * @param storageLocation - storage location to be used.
   */
  public changeStorageLocation(
    isChangeLocation: boolean,
    storageLocation: any = localStorage
  ) {
    if (isChangeLocation == true) {
      this.storageLocation = storageLocation;
      storageLocation.setItem('storageLocation', 'local-storage');
    }

    if (isChangeLocation == false) {
      this.storageLocation = sessionStorage;
      this.storageLocation.setItem('storageLocation', 'session-storage');
    }
  }

  /**
   * Delete a value from cache using its key
   * @param {string} key - key of the value to be deleted
   * @returns {void}
   */
  public delete(key: string): void {
    this.storageLocation.removeItem(key);
  }

  /**
   * Resets the cache to null
   * @returns {void}
   */
  public reset(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
