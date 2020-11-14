import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { TeamsService } from './team-manager.service'

@Component({
  selector: 'lol-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss'],
})
export class TeamManager implements OnInit {
  constructor(private titleService: Title, private teamsService: TeamsService) {}

  teams: any
  teamsLocal: any

  startBattle(): void {
    this.teamsLocal = this.teams
    localStorage.setItem('teams', JSON.stringify(this.teamsLocal))
    console.log(this.teamsLocal)
  }

  ngOnInit() {
    this.titleService.setTitle('Gerenciamento de times')
    this.teams = this.teamsService.getTeams()
  }
}
