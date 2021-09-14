import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-d-kmagic',
  templateUrl: './d-kmagic.component.html',
  styleUrls: ['./d-kmagic.component.css']
})
export class DKmagicComponent implements OnInit {
  effects = [
    {
      name: ' portée',
      values:
        [
          {pm: 0, name: 'mêlée'},
          {pm: 1, name: 'jet'},
          {pm: 2, name: 'tir'},
          {pm: 3, name: 'vue'},
          {pm: 4, name: 'hors de vue'},
        ]
    },
    {
      name: ' durée',
      values:
        [
          {pm: 0, name: 'instantanné ou 1 tour'},
          {pm: 1, name: '1d6+degré tour ou concentration'},
          {pm: 2, name: '1 scène ou 1 jour'},
          {pm: 3, name: '1 séance ou 1 semaine	'},
          {pm: 4, name: 'longtemps ou jusqu\'à un moment précis'},
        ]
    },
    {
      name: 'Cibles ou zone',
      values:
        [
          {pm: 0, name: '1 ou chaise'},
          {pm: 1, name: '2 ou chariot	'},
          {pm: 2, name: '4 ou grande salle	'},
          {pm: 3, name: '8 ou maison	'},
          {pm: 4, name: '16 ou château'},
        ]
    },
    {
      name: 'Délai',
      values:
        [
          {pm: 0, name: 'tout de suite'},
          {pm: 1, name: 'avec délai'},
          {pm: 2, name: '-'},
          {pm: 3, name: '-'},
          {pm: 4, name: '-'},
        ]
    },
    {
      name: 'Effets génériques',
      values:
        [
          {pm: 0, name: 'amateurs'},
          {pm: 1, name: '-'},
          {pm: 2, name: 'professionnels'},
          {pm: 3, name: '-'},
          {pm: 4, name: 'brutasses'},
        ]
    },
    {
      name: 'Dégâts & Soins',
      values:
        [
          {pm: 0, name: '1d6 + caractéristique'},
          {pm: 1, name: '2d6 + caractéristique'},
          {pm: 2, name: '3d6 + caractéristique'},
          {pm: 3, name: '4d6 + caractéristique'},
          {pm: 4, name: '5d6 + caractéristique'},
        ]
    },
    {
      name: 'Coups spéciaux',
      values:
        [
          {pm: 0, name: ''},
          {pm: 1, name: '1 coup'},
          {pm: 2, name: ''},
          {pm: 3, name: '2 coups'},
          {pm: 4, name: ''},
        ]
    },
    {
      name: 'Modificateur compétence',
      values:
        [
          {pm: 0, name: '+1/-1	'},
          {pm: 1, name: '+2/-2	'},
          {pm: 2, name: '+4/-4	'},
          {pm: 3, name: '+7/-7	'},
          {pm: 4, name: '+11/-11'},
        ]
    },
    {
      name: 'FD invocation de combat',
      values:
        [
          {pm: 0, name: '-'},
          {pm: 1, name: 'FD1'},
          {pm: 2, name: 'FD2'},
          {pm: 3, name: 'FD3'},
          {pm: 4, name: 'FD4'},
        ]
    },
    {
      name: 'Niveau d\'invocation',
      values:
        [
          {pm: 0, name: '1'},
          {pm: 1, name: '2'},
          {pm: 2, name: '3'},
          {pm: 3, name: '6'},
          {pm: 4, name: '10'},
        ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

