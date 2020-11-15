import { Component, Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'

let teamsLastEight: any
let teamsSemiFinal: any = []
let teamsFinal: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-play-offs',
  templateUrl: './play-offs.component.html',
  styleUrls: ['./play-offs.component.scss'],
})
export class PlayOffs implements OnInit {
  constructor(private router: Router) {}
  teams: any = teamsLastEight
  teamsSemiFinal: any = []

  ngOnInit() {
    this.teams ? '' : this.router.navigateByUrl('/home')
  }

  startBattle(teams: any) {
    teamsLastEight = this.shuffleTeams(teams)
    this.router.navigateByUrl('/play-offs')
  }

  winnerLastEight(team: any) {
    teamsSemiFinal.push(team)
    this.teamsSemiFinal = teamsSemiFinal
  }

  shuffleTeams(array: any) {
    let currentIndex: any = array.length,
      temporaryValue: any,
      randomIndex: any

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }
}
