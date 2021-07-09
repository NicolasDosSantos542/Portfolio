import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      miniature: 'assets/images/projects/miniatures/dircord_small.png',
      array: [{
        image: 'assets/images/projects/dircord/home.png',
      }, {
        image: 'assets/images/projects/dircord/bbcodes.png',
        alt: 'alt of image', // Optional
        title: 'title of image' // Optional: Show image with description text
      }, {
        image: 'assets/images/projects/dircord/joinchan.png',
        alt: 'alt of image', // Optional
        title: 'title of image' // Optional: Show image with description text
      }, {
        image: 'assets/images/projects/dircord/messenger.png', // Support base64 image
        title: 'Image title', // Optional: You can use this key if want to show image with title
        alt: 'Image alt' // Optional: You can use this key if want to show image with alt
      }
      ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/espri_small.png',
      array: [{
        image: 'assets/images/projects/espri/espri.png',
      }, {
        image: 'assets/images/projects/espri/espri.png',
        alt: 'alt of image', // Optional
        title: 'title of image' // Optional: Show image with description text
      }, {
        image: 'assets/images/projects/espri/espri.png', // Support base64 image
        title: 'Image title', // Optional: You can use this key if want to show image with title
        alt: 'Image alt' // Optional: You can use this key if want to show image with alt
      }
      ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/freeads_small.png',
      array:
        [{
          image: 'assets/images/projects/freeads/annonce.png',
        }, {
          image: 'assets/images/projects/freeads/connect.png',
          alt: 'alt of image', // Optional
          title: 'title of image' // Optional: Show image with description text
        }, {
          image: 'assets/images/projects/freeads/home.png', // Support base64 image
          title: 'Image title', // Optional: You can use this key if want to show image with title
          alt: 'Image alt' // Optional: You can use this key if want to show image with alt
        },
          {
            image: 'assets/images/projects/freeads/signin.png', // Support base64 image
            title: 'Image title', // Optional: You can use this key if want to show image with title
            alt: 'Image alt' // Optional: You can use this key if want to show image with alt
          }
        ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/my_quizz_small.png',
      array:
        [{
          image: 'assets/images/projects/my_quizz/main-page.png',
        }, {
          image: 'assets/images/projects/my_quizz/stats-quizz.png',
          alt: 'alt of image', // Optional
          title: 'title of image' // Optional: Show image with description text
        }, {
          image: 'assets/images/projects/my_quizz/stats-quizzplus.png',
          alt: 'alt of image', // Optional
          title: 'title of image' // Optional: Show image with description text
        }, {
          image: 'assets/images/projects/my_quizz/stats-user.png', // Support base64 image
          title: 'Image title', // Optional: You can use this key if want to show image with title
          alt: 'Image alt' // Optional: You can use this key if want to show image with alt
        }
        ]
    }
  ];

  constructor() {
    // console.log(this.projects);
  }

  ngOnInit(): void {
  }

}
