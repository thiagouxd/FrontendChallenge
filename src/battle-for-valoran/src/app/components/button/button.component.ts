import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'lol-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class Button implements OnInit {
  @Input() size: string
  @Input() type: string
  @Input() text: string
  @Input() disabled: boolean = false
  @Input() callbackFunction: () => void
  @Input() routerLink: string

  ngOnInit() {
    this.size = this.size ? `button_${this.size}` : ''
    this.type = this.type ? `button_${this.type}` : ''
  }
}
