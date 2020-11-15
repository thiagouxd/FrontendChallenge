import { Component, Input } from '@angular/core'
import { Region } from '../region/region.component'

@Component({
  selector: 'lol-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamForm {
  constructor(private region: Region) {}

  @Input() team: any

  changeNameTeam(team: any, event): void {
    team.name = event.target.value
  }

  chooseRegion(team) {
    this.region.openDialog(team)
    const idDialog = `team${team.id}`
  }
}
