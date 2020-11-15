import { Component, Injectable } from '@angular/core'
import { Router } from '@angular/router'

let teamsBattle: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.scss'],
})
export class PlayOff {
  constructor(private router: Router) {}
  teams: any

  startBattle(teams: any) {
    teamsBattle = teams
    console.log(teamsBattle)
    this.router.navigateByUrl('/play-off')
  }

  verifyTeams() {
    console.log(teamsBattle)
  }
}
