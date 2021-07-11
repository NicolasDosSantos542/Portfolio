import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessagesService} from '../../services/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private messageService: MessagesService) {

  }

  formData = {
    contact: undefined,
    sujet: undefined,
    message: undefined
  };


  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  async onFormSubmit(form: NgForm) {
    this.formData = form.form.value;
    const request = {
      contact: this.formData.contact,
      sujet: this.formData.sujet,
      message: this.formData.message,
      to: '60eb433b3fbbf1035ab5252a'
    };
    (await this.messageService.sendForm(request)).subscribe(() => {
      alert('message envoyé');
    });
    console.log(this.formData);
  }
}
