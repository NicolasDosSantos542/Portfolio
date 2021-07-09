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
        alt: 'dircord accueil',
        title: 'messagerie en ligne: react et express'
      }, {
        image: 'assets/images/projects/dircord/messenger.png',
        alt: 'fenêtre messagerie'
      }, {
        image: 'assets/images/projects/dircord/joinchan.png',
        alt: 'joindre salon méthode graphique',
      }, {
        image: 'assets/images/projects/dircord/bbcodes.png',
        alt: 'BBcodes disponibles',
      }
      ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/espri_small.png',
      array: [{
        image: 'assets/images/projects/espri/espri.png',
        alt: 'fiche de personnage',
        title: 'projet perso (en ligne) fiche de personnage de jeu de rôle : Angular'
      }
      ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/freeads_small.png',
      array:
        [{
          image: 'assets/images/projects/freeads/annonce.png',
          alt: 'page des annonces',
          title: 'site de petites annonces en ligne: Laravel'
        }, {
          image: 'assets/images/projects/freeads/connect.png',
          alt: 'page de connexion',
        }, {
          image: 'assets/images/projects/freeads/home.png',
          alt: 'page d\'accueil '
        },
          {
            image: 'assets/images/projects/freeads/signin.png',
            alt: 'page d\'inscription'
          }
        ]
    }
    ,
    {
      miniature: 'assets/images/projects/miniatures/my_quizz_small.png',
      array:
        [{
          image: 'assets/images/projects/my_quizz/main-page.png',
          alt: 'page principale,',
          title: 'quizz collaboratif en ligne: Symfony'
        }, {
          image: 'assets/images/projects/my_quizz/stats-quizz.png',
          alt: 'stats quizz', // Optional
        }, {
          image: 'assets/images/projects/my_quizz/stats-quizzplus.png',
          alt: 'stats quizz plus', // Optional
        }, {
          image: 'assets/images/projects/my_quizz/stats-user.png', // Support base64 image
          alt: 'stats utilisateur' // Optional: You can use this key if want to show image with alt
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
