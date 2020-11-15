import { Component, OnInit, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Dialog } from 'src/app/components/dialog/dialog.component'
import { TeamsService } from './team-manager.service'
import { PlayOffs } from '../play-offs/play-offs.component'

@Component({
  selector: 'lol-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss'],
})
export class TeamManager implements OnInit {
  dialog: any = new Dialog()

  get nameTeamsComplete() {
    return this.teams.some((team) => team.name)
  }

  get regionTeamsComplete() {
    return this.teams.some((team) => team.region.name)
  }

  constructor(
    private playOffs: PlayOffs,
    private titleService: Title,
    private teamsService: TeamsService,
  ) {}

  @Input() teams: any
  @Input() teamSelected: any

  ngOnInit() {
    this.titleService.setTitle('Gerenciamento de times')
    this.teams = this.teamsService.getTeams()
  }

  startBattle() {
    // this.nameTeamsComplete() && this.regionTeamsComplete()
    this.nameTeamsComplete
      ? this.playOffs.startBattle(this.teams)
      : alert('Preencha todos os campos e escolha todas as regiões.')
  }

  closeDialog() {
    const regionSelected = document.querySelector('[name=radioRegion]:checked')
    //@ts-ignore
    regionSelected.checked = false
    this.dialog.close()
  }
}
