import { Component, Input } from '@angular/core'
import { Dialog } from '../dialog/dialog.component'

@Component({
  selector: 'lol-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamForm {
  @Input() team: any
  @Input() callbackChooseRegion(): void {}

  dialog: any = new Dialog()

  changeNameTeam(team: any, event): void {
    team.name = event.target.value
  }

  chooseRegion(team) {
    const idDialog = `team${team.id}`
    this.dialog.open(idDialog)
  }
}
