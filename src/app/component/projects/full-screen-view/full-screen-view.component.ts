import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen-view',
  templateUrl: './full-screen-view.component.html',
  styleUrls: ['./full-screen-view.component.css']
})
export class FullScreenViewComponent implements OnInit {

  showFlag = false;
  selectedImageIndex = -1;
  private currentIndex: number;
  imageObject: Array<object> = [{
    image: 'assets/images/projects/dircord/home.png',
  }, {
    image: 'assets/images/projects/dircord/joinchan.png',
    alt: 'alt of image', // Optional
    title: 'title of image' // Optional: Show image with description text
  }, {
    image: 'assets/images/projects/dircord/messenger.png', // Support base64 image
    title: 'Image title', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
  }
  ];

  constructor() {
  }

  ngOnInit(): void {
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
