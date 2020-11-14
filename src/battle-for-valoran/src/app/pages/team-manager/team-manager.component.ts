import { Component, OnInit, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Dialog } from 'src/app/components/dialog/dialog.component'
import { TeamsService } from './team-manager.service'

@Component({
  selector: 'lol-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss'],
})
export class TeamManager implements OnInit {
  dialog: any = new Dialog()
  constructor(private titleService: Title, private teamsService: TeamsService) {}

  @Input() teams: any

  startBattle(): void {
    localStorage.setItem('teams', JSON.stringify(this.teams))
    console.log(this.teams)
  }

  ngOnInit() {
    this.titleService.setTitle('Gerenciamento de times')
    this.teams = this.teamsService.getTeams()
  }
}
