import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dunningkruger',
  templateUrl: './dunningkruger.component.html',
  styleUrls: ['./dunningkruger.component.css']
})
export class DunningkrugerComponent implements OnInit {
  isImageActive = false;

  constructor() { }

  ngOnInit(): void {
    console.log("init setImageActive" , this.isImageActive)
  }
  setImageActive() {
    this.isImageActive = !this.isImageActive;
    console.log("setImageActive", this.isImageActive)
  }
}
