import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lol-paragraphy',
  templateUrl: './paragraphy.component.html',
  styleUrls: ['./paragraphy.component.scss'],
})
export class Paragraphy implements OnInit {
  @Input() size: string;

  ngOnInit() {
    this.size = this.size ? `paragraphy_${this.size}` : '';
  }
}
