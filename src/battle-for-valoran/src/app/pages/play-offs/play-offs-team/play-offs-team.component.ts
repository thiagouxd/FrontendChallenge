import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'lol-play-offs-team',
  templateUrl: './play-offs-team.component.html',
  styleUrls: ['./play-offs-team.component.scss'],
})
export class PlayOffsTeam {
  @Input() team: any
  @Output() callbackWinner: EventEmitter<any> = new EventEmitter()

  winner(event: any, team: any) {
    const buttonTeams = event.target.parentElement.parentElement.querySelectorAll(
      'lol-play-offs-team',
    )

    this.callbackWinner.emit([team])
    buttonTeams.forEach((button: any) => {
      button.querySelector('button').disabled = true
    })
  }
}
