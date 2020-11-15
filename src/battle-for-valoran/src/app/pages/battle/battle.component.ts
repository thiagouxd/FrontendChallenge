import { Component, Injectable } from '@angular/core'
import { Router } from '@angular/router'

let teamsBattle: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class Battle {
  constructor(private router: Router) {}
  teams: any

  startBattle(teams: any) {
    teamsBattle = teams
    console.log(teamsBattle)
    this.router.navigateByUrl('/battle')
  }

  verifyTeams() {
    console.log(teamsBattle)
  }
}
