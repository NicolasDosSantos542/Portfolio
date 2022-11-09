import {AfterViewChecked, Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, AfterViewChecked {
  value = '';
  // str = '';
  @Output() goToPage = new EventEmitter<string>();

  helpMessage = '  <style>#terminal div p {\n' +
    '  margin-top: 0;\n' +
    '  margin-bottom: 0;\n' +
    '}</style>  <div class="help" >    <p>Commandes possibles:</p>   ' +
    ' <p>cd: afficher le chapitre passé en argument (\'accueil\', \'parcours\', \'compétences\', \'projets\', \'contact\')</p>' +
    '<p>ls: afficher la liste des chapitres    </p>  ' +
    '  <p>      getCV : telecharger le CV en pdf    </p>  ' +
  '  <p>      contact : afficher le formulaire de contact    </p>  ' +
    '  <p>     git : lien vers le github du portfolio     </p> '/* +
    '   <p>   recruit: completer le formulaire de contact en mode terminal      </p>  </div>'
    */
  ;
  lsMessage = '<style>\n' +
    '#terminal div ul {\n' +
    '  margin-top: 0;\n' +
    '  margin-bottom: 0;\n' +
    '}</style> <div id="content-ls"> <ul id="ls-list" style=" display: flex; list-style: none; flex-wrap: wrap;"> ' +
    '<li style="  margin-right: 4em;">accueil</li> <li style="  margin-right: 4em;">parcours</li> ' +
    '<li style="  margin-right: 4em;">compétences</li> <li style="  margin-right: 4em;">projets</li> ' +
    '<li style="  margin-right: 4em;">contact</li> </ul> </div>';

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
    let param;
    if (value.includes(' ')) {
      cmd = value.substr(0, value.indexOf(' '));
      let secondPart = value.substr(value.indexOf(' '), value.length);
      secondPart = secondPart.trim();
      if (secondPart.includes(' ')) {
        param = secondPart.substr(0, secondPart.indexOf(' '));
      }else {
        param = secondPart.substr(0, secondPart.length);
      }
    }
    terminal.innerHTML += 'nicolas-dds>' + value + '<br/>';


    switch (cmd) {
      case 'help':
        terminal.innerHTML += this.helpMessage;
        break;
      case 'ls':
        this.displayComponents();
        break;
      case 'getCV':
      case 'getcv':
        this.getCV();
        break;
      case 'cd':
        this.cdCommand(param);
        break;
      case 'contact':
        this.cdCommand('contact');
        break;
      case 'recruit':
        this.recruit();
        break;
      case 'git':
        this.displayGit();
        break;
    }
    this.value = '';
    this.ngOnInit();
  }

  // tslint:disable-next-line:typedef
  private displayComponents() {
    const terminal = document.getElementById('terminal-content');

    terminal.innerHTML += this.lsMessage;


  }

   private getCV(): void {
    const downloadCv = document.getElementById('download');
    downloadCv.click();
  }

  private recruit() {

  }

  private displayGit() {
    window.open('https://github.com/NicolasDosSantos542/portfolio', '_blank');
  }

  // tslint:disable-next-line:typedef
  private cdCommand(param) {
    let element = '';
    switch (param) {
      case 'home' :
      case 'accueil' :
        element = 'home';
        break;
      case 'background':
      case 'parcours':
        element = 'background';
        break;
      case 'skills':
      case 'compétences':
        element = 'skills';
        break;
      case 'projects':
      case 'projets':
        element = 'projects';
        break;
      case 'contact':
        element = 'contact';
        break;
        default:
          return null;
    }
    this.goToPage.emit(element);
  }
  putFocusOnTerminal(){
    document.getElementById("cmdInput").focus();
  }
}
