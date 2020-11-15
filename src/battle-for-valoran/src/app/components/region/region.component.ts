import { Component, OnInit, Input } from '@angular/core'
import { Dialog } from '../dialog/dialog.component'
import { RegionsService } from './region.service'

@Component({
  selector: 'lol-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class Region implements OnInit {
  constructor(private regionsService: RegionsService) {}

  @Input() team: any

  regions: any
  regionSelected: any
  dialog: any = new Dialog()

  ngOnInit() {
    this.regions = this.regionsService.getRegions()
  }

  openDialog(team: any) {
    this.dialog.show('region')
  }

  choose(team: any, region: any) {
    team.region = region
    console.log(team)
  }
}
