import { Component, OnInit, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Dialog } from 'src/app/components/dialog/dialog.component'
import { TeamsService } from './team-manager.service'
import { PlayOff } from '../play-off/play-off.component'

@Component({
  selector: 'lol-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss'],
})
export class TeamManager implements OnInit {
  dialog: any = new Dialog()
  constructor(
    private playOff: PlayOff,
    private titleService: Title,
    private teamsService: TeamsService,
  ) {}

  @Input() teams: any
  @Input() teamSelected: any

  ngOnInit() {
    this.titleService.setTitle('Gerenciamento de times')
    this.teams = this.teamsService.getTeams()
  }

  startBattle(): void {
    this.playOff.startBattle(this.teams)
  }

  closeDialog() {
    const regionSelected = document.querySelector('[name=radioRegion]:checked')
    //@ts-ignore
    regionSelected.checked = false
    this.dialog.close()
  }
}
