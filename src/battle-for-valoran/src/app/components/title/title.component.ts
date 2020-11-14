import { Component, Input } from '@angular/core'

@Component({
  selector: 'lol-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class Title {
  @Input() size: boolean = true
}
