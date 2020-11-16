import { Component, Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Champion } from '../champion/champion.component'

let teamsLastEight: any

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-play-offs',
  templateUrl: './play-offs.component.html',
  styleUrls: ['./play-offs.component.scss'],
})
export class PlayOffs implements OnInit {
  constructor(private router: Router, private champion: Champion) {}
  teams: any = teamsLastEight
  match: any = {
    first: {},
    second: {},
    third: {},
    fourth: {},
    fiveth: {},
    sixth: {},
    final: {},
  }

  ngOnInit() {
    this.teams ? '' : this.router.navigateByUrl('/home')
  }

  startBattle(teams: any) {
    teamsLastEight = this.shuffleTeams(teams)
    this.router.navigateByUrl('/play-offs')
  }

  winnerMatch(team: any, match: string) {
    match !== 'final' ? (this.match[match] = team) : this.goToChampion(team)
  }

  goToChampion(champion: any) {
    this.champion.show(champion)
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
