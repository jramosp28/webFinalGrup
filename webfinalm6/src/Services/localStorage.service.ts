import { Injectable, Inject, InjectionToken } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) { }

  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    const value = this.localStorage.getItem(key);
    return value ? value : null;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  clear(): void {
    this.localStorage.clear();
  }
}

export const LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE');

export const localStorageProvider = {
  provide: LOCAL_STORAGE,
  useValue: localStorage
};
