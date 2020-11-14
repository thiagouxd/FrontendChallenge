import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams: any = [
    { id: 1, name: '', region: {} },
    { id: 2, name: '', region: {} },
    { id: 3, name: '', region: {} },
    { id: 4, name: '', region: {} },
    { id: 5, name: '', region: {} },
    { id: 6, name: '', region: {} },
    { id: 7, name: '', region: {} },
    { id: 8, name: '', region: {} },
  ]

  getTeams() {
    return this.teams
  }
}
