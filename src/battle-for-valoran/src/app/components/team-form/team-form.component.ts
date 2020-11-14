import { Component, Input } from '@angular/core'

@Component({
  selector: 'lol-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamForm {
  constructor() {}

  @Input() team: any

  changeNameTeam(team: any, event): void {
    team.name = event.target.value
  }

  chooseRegion() {
    alert('teste')
  }
}
