import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Message } from 'src/models/message.model';
import { DialogService } from 'src/shared/services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;
  public conversation: Observable<Message[]> = of([]);
  private dialog: Message[] = [];

  constructor(
    private dialogService: DialogService,
  ) {}

  ngOnInit() {
    this.conversation = this.dialogService.dialog;
  }

  public onSubmit(dialogForm: NgForm) {
    const message = dialogForm.value.message;
      this.doHandleInputMessage(message);
      dialogForm.reset();
  }

  private doHandleInputMessage(message: string) {
    const payload: Message = {
      'fulfillmentDescription': message,
      'source': 'user',
      'payload': undefined,
      'prompts': []
    };

    this.updateDialog(payload);

    // this.intentService.detect(message)
    //   .subscribe(
    //     (result: Message) => {
    //       this.updateDialog(result);
    //       this.loadingService.updateState(false);
    //     }
    //   );
  }

  updateDialog(payload: Message) {
    this.dialog.push(payload);
    this.dialogService.updateDialog(this.dialog);
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const scrollableElement = this.scrollContent?.nativeElement;
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }, 0);
  }
}
