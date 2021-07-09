import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects = [
  {name: 'dircord'},
  {name: 'espri'},
  {name: 'freeads'},
  {name: 'my_quizz'}
];
  constructor() {
  }

  ngOnInit(): void {
  }

}
