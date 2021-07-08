import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, AfterViewChecked {
  value = '';
  // str = '';

  helpMessage = '  <div class="help" >    <p>Commandes possibles:</p>    <p>      cd: afficher le chapitre passé en argument (\'accueil\', \'parcours\', \'compétences\', \'projets\', \'contact\')    </p>    <p>      ls: afficher la liste des chapitres    </p>    <p>      getCV : telecharger le CV en pdf    </p>    <p>      contact : afficher le formulaire de contact    </p>    <p>      recruit: completer le formulaire de contact en mode terminal    </p>    <p>      git : afficher la liste des projets sur github    </p>  </div>';
  lsMessage = ' <div>coucou</div>';
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    const terminal = document.getElementById('terminal');

    terminal.scrollTo({
      top: terminal.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  // tslint:disable-next-line:typedef
  commandTerminal(value) {
    const terminal = document.getElementById('terminal-content');

    let cmd = value;
    if (value.includes(' ')) {
      cmd = value.substr(0, value.indexOf(' '));
    }




    switch (cmd) {
      case 'help':
        terminal.innerHTML += this.helpMessage;
        break;
      case 'ls':
        this.displayComponents();
        break;
      case 'getCV':
        this.getCV();
        break;
      case 'cd':
        this.cdCommand();
        break;
      case 'recruit':
        this.recruit();
        break;
      case 'git':
        this.displayGit();
        break;
    }
  }

  private displayComponents() {
    const terminal = document.getElementById('terminal-content');

    terminal.innerHTML += this.lsMessage;

  }

  private getCV() {

  }

  private recruit() {

  }

  private displayGit() {

  }

  private cdCommand() {

  }
}
