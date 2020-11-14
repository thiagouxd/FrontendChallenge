import { Component, Input } from '@angular/core'

@Component({
  selector: 'lol-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamForm {
  @Input() team: any

  teamName: string = 'teste'

  includeName(event) {
    console.log(event.target.value)
  }
}
