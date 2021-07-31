import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-full-screen-view',
  templateUrl: './full-screen-view.component.html',
  styleUrls: ['./full-screen-view.component.css']
})
export class FullScreenViewComponent implements OnInit {
  @Input()  proj: any;
  miniature = 'https://via.placeholder.com/600x300' ;
  showFlag = false;
  selectedImageIndex = -1;
  private currentIndex: number;
  imageObject: Array<object> = [{
    image: '',
  }, {
    image: '',
    alt: '',
    title: ''
  }, {
    image: '',
    title: '',
    alt: ''
  }
  ];



  constructor() {
  }

  ngOnInit(): void {
    this.imageObject = this.proj.array;
  }

  // tslint:disable-next-line:typedef
  showLightbox(index) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  // tslint:disable-next-line:typedef
  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
