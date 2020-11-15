import { Component, Injectable } from '@angular/core'
import { Router } from '@angular/router'

let teamsBattle: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-play-offs',
  templateUrl: './play-offs.component.html',
  styleUrls: ['./play-offs.component.scss'],
})
export class PlayOffs {
  constructor(private router: Router) {}
  teams: any

  startBattle(teams: any) {
    teamsBattle = teams
    console.log(teamsBattle)
    this.router.navigateByUrl('/play-offs')
  }

  verifyTeams() {
    console.log(teamsBattle)
  }
}
