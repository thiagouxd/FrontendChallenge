import { Component, OnInit, Injectable } from '@angular/core'
import { Dialog } from '../dialog/dialog.component'
import { RegionsService } from './region.service'

let teamBattle: any
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'lol-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class Region implements OnInit {
  constructor(private regionsService: RegionsService) {}

  regions: any
  regionSelected: any
  dialog: any = new Dialog()

  ngOnInit() {
    this.regions = this.regionsService.getRegions()
  }

  openDialog(team: any) {
    teamBattle = team
    document.querySelector('[name="radioRegion"]:checked')
    this.dialog.open('region')
  }

  choose(region: any) {
    teamBattle.region = region
  }
}
