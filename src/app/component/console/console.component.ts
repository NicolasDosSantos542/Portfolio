import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, AfterViewChecked {
  value = '';
  // str = '';
  isHelp = false;

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
    const terminal = document.getElementById('terminal');

    let cmd = value;
    if (value.includes(' ')) {
      cmd = value.substr(0, value.indexOf(' '));
    }
    switch (cmd) {
      case 'help':
        this.isHelp = true;
        terminal.scrollIntoView();
        // terminal.scrollTo(0, terminal.scrollHeight);
        console.log(terminal.scrollHeight);
        console.log(terminal.clientHeight);
        console.log('terminal', terminal);
        // terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight;
        // terminal.scrollTo(0,  148);
        break;
      case 'ls':
        this.displayComponents();
        break;
      case 'getCV':
        this.getCV();
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

  }

  private getCV() {

  }

  private recruit() {

  }

  private displayGit() {

  }
}
