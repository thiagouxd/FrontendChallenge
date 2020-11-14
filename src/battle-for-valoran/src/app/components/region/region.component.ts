import { Component, OnInit } from '@angular/core'
import { Dialog } from '../dialog/dialog.component'
import { RegionsService } from './region.service'

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
    this.dialog.show('region')
  }

  choose(region: any) {
    console.log(region)
  }
}
