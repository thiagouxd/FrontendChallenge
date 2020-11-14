import { Component, Input } from '@angular/core'

@Component({
  selector: 'lol-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.scss'],
})
export class Divisor {
  @Input() dark: boolean
}
