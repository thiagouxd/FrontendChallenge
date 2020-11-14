import { Component, Input } from '@angular/core'
import { Dialog } from '../dialog/dialog.component'

@Component({
  selector: 'lol-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamForm {
  constructor() {}

  dialog = new Dialog()
  @Input() team: any
  @Input() callbackChooseRegion(): void {}

  changeNameTeam(team: any, event): void {
    team.name = event.target.value
  }

  chooseRegion() {
    this.dialog.show('region')
  }
}
