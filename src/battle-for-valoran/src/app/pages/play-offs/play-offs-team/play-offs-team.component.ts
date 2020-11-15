import { Component, Input } from '@angular/core'

@Component({
  selector: 'lol-play-offs-team',
  templateUrl: './play-offs-team.component.html',
  styleUrls: ['./play-offs-team.component.scss'],
})
export class PlayOffsTeam {
  @Input() team: any
  @Input() callbackWinner(team: any): void {}

  winner(event: any, team: any) {
    const buttonTeams = event.target.parentElement.parentElement.querySelectorAll(
      'lol-play-offs-team',
    )
    console.log(buttonTeams)

    buttonTeams.forEach((button: any) => {
      button.querySelector('button').disabled = true
    })
    this.callbackWinner(team)
  }
}
