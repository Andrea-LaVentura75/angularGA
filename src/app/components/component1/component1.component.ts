import { Component } from '@angular/core';

@Component({
  selector: '.app-component1',
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss',
})
export class Component1Component {
  nscondi: boolean = true;
  buttonText: string = 'NASCONDI';

  nasc() {
    this.nscondi = !this.nscondi;
    this.buttonText = this.nscondi ? 'NASCONDI' : 'MOSTRA';
  }
}
