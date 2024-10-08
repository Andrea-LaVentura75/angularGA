import { Component } from '@angular/core';

@Component({
  selector: '.app-component3',
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.scss',
})
export class Component3Component {
  nscondi: boolean = true;
  buttonText: string = 'NASCONDI';

  nasc() {
    this.nscondi = !this.nscondi;
    this.buttonText = this.nscondi ? 'NASCONDI' : 'MOSTRA';
  }
}
