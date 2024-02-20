import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Message } from 'src/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _conversation = new BehaviorSubject<Message[]>([]);

  constructor(private storageService: StorageService) {
    if (this.storageService.checkSession('dialog')) {
      const savedConversation = this.storageService.getSession('dialog');
      this.updateDialog(savedConversation);
    }
  }

  public get dialog(): Observable<Message[]> {
    return this._conversation as Observable<Message[]>;
  }

  public updateDialog(messages: Message[]) {
    this._conversation.next(messages);
    this.storageService.updateSession('dialog', messages);
  }
}
