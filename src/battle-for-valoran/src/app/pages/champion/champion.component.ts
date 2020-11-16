import { Component, Injectable } from '@angular/core'
import { Router } from '@angular/router'

let teamChampion: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss'],
})
export class Champion {
  constructor(private router: Router) {}

  teamChampion: any = teamChampion

  show(team: any) {
    this.router.navigateByUrl('/champion')
    teamChampion = team
    console.log(this.teamChampion)
  }
}
