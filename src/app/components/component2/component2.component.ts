import { Component } from '@angular/core';

@Component({
  selector: '.app-component2',
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss',
})
export class Component2Component {
  nscondi: boolean = true;
  buttonText: string = 'NASCONDI';

  nasc() {
    this.nscondi = !this.nscondi;
    this.buttonText = this.nscondi ? 'NASCONDI' : 'MOSTRA';
  }
}
