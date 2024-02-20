import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  checkSession(name: string) {
    const sessionExists = (sessionStorage.getItem(name)) ? true : false;

    return sessionExists;
  }

  createSession(name: string) {
    sessionStorage.setItem(name, JSON.stringify([]));

    return;
  }

  getSession(name: string) {
    const sessionData = sessionStorage.getItem(name);

    if (sessionData) {
      return JSON.parse(sessionData);
    }
  }

  updateSession(name: any, data: any) {
    sessionStorage.setItem(name, JSON.stringify(data));

    return;
  }

  clearSession() {
    sessionStorage.clear();

    return;
  }
}
