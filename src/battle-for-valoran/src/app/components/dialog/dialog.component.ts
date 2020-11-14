import { Component, Input, OnInit } from '@angular/core'

let open = false
let lastElement: any
let idOpened: any
let allElements: any

@Component({
  selector: 'lol-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class Dialog implements OnInit {
  @Input() size: string
  @Input() dialogId: string
  @Input() title: string
  @Input() subtitle: string

  show(id: string) {
    lastElement = document.activeElement
    idOpened = id
    open = true
    let lastElementInternal = document.createElement('SPAN')
    document.getElementById(idOpened).appendChild(lastElementInternal)
    allElements = document.querySelectorAll(`#${idOpened} *`)
    document.getElementById(idOpened).classList.add('dialog_active')
    allElements[1].setAttribute('tabindex', '0')
    allElements[1].focus()
    document.body.style.overflowY = 'hidden'
    this.focusInternal()
  }

  focusInternal() {
    allElements[allElements.length - 1].setAttribute('tabindex', '0')
    allElements[allElements.length - 1].addEventListener('focus', () => {
      allElements[1].focus()
    })
    allElements[0].setAttribute('tabindex', '0')
    document.onkeydown = (e) => {
      e || window.event
      this.focusLoop(e)
      if (e.keyCode === 27) {
        this.close()
      }
    }
  }

  focusLoop(e) {
    allElements[0].addEventListener('focus', () => {
      if (e.shiftKey && e.keyCode === 9) {
        allElements[1].focus()
      }
    })
  }

  close() {
    const open = document.getElementById(idOpened)
    if (open.classList.contains('dialog_active')) {
      open.classList.remove('dialog_active')
      allElements[allElements.length - 1].remove()
      lastElement.focus()
      document.body.style.overflowY = 'auto'
    }
  }

  blockEsc() {
    document.onkeydown = (e) => {
      e || window.event
      this.focusLoop(e)
      if (e.keyCode === 27) {
        return
      }
    }
  }

  ngOnInit() {
    this.size = this.size ? `dialog_${this.size}` : ''
  }

  preventClick(event: any) {
    event.stopPropagation()
  }
}
