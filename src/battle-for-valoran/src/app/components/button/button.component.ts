import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lol-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class Button implements OnInit {
  @Input() size: string;
  @Input() disabled: boolean = false;
  @Input() callbackFunction: () => void;

  ngOnInit() {
    this.size = this.size ? `button_${this.size}` : '';
  }
}
