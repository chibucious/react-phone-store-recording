import { Injectable } from '@angular/core';
import { MemoryCacheService } from '../../memory-cache/memory-cache.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedService {
  constructor(public cache: MemoryCacheService) {}

  isAuthenticated(): boolean {
    const userData = this.cache.get('userData');
    console.log('user data: ', userData);

    if (userData?.id == undefined) return false;

    return true;
  }

  isRole(): string {
    const userData = this.cache.get('userData');

    let role = userData?.idtype == 3 ? 'User' : 'Admin';

    return role.toLowerCase();
  }
}
