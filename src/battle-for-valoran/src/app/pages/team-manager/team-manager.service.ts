import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams: any = [
    { id: 1, name: '', image: '' },
    { id: 2, name: '', image: '' },
    { id: 3, name: '', image: '' },
    { id: 4, name: '', image: '' },
    { id: 5, name: '', image: '' },
    { id: 6, name: '', image: '' },
    { id: 7, name: '', image: '' },
    { id: 8, name: '', image: '' },
  ]

  saveLocalStorage() {
    localStorage.setItem('teams', JSON.stringify(this.teams))
  }

  getTeams() {
    this.saveLocalStorage()
    const teams = localStorage.getItem('teams')
    return JSON.parse(teams)
  }
}
