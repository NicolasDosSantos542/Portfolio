import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }
  formData = {};
  ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeoRQKPkR552tt35ufXG2ICc8EpbDAThF3-QMSr-f9kWR11xg/viewform?usp=sf_link';
  MESSAGE_ID = 'entry.1555308058';
  EMAIL_ID = 'entry.198411971';
  NAME_ID = 'entry.730840068';
  CORS_PROXY = '';




  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  onFormSubmit(form: NgForm) {
    this.formData = form.form.value;
    console.log(this.formData);
  }
}
