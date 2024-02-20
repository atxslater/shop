import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public _scroll = new BehaviorSubject<any>(null);

  constructor() { }

  public updateScroll(state: boolean) {
    this._scroll.next(state);
  }
}
