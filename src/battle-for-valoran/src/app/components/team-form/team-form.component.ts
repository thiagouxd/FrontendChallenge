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

  changeNameTeam(team: any, event: any): void {
    team.name = event.target.value
  }

  chooseRegion(team: any) {
    this.region.openDialog(team)
  }
}
