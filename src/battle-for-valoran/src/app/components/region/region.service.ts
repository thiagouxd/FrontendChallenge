import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  regions: any = [
    { id: 1, name: 'BANDÓPOLIS', image: 'assets/bandopolis.png' },
    { id: 2, name: 'DEMACIA', image: 'assets/demacia.png' },
    { id: 3, name: 'FRELJORD', image: 'assets/freljord.png' },
    { id: 4, name: 'ILHA DAS SOMBRAS', image: 'assets/ilha-das-sombras.png' },
    { id: 5, name: 'IONIA', image: 'assets/ionia.png' },
    { id: 6, name: 'IXTAL', image: 'assets/ixtal.png' },
    { id: 7, name: 'NOXUS', image: 'assets/noxus.png' },
    { id: 8, name: 'PILTOVER', image: 'assets/piltover.png' },
    { id: 8, name: 'SHURIMA', image: 'assets/shurima.png' },
    { id: 8, name: 'O VAZIO', image: 'assets/o-vazio.png' },
    { id: 8, name: 'TARGON', image: 'assets/targon.png' },
    { id: 8, name: 'ZAUN', image: 'assets/zaun.png' },
    { id: 8, name: 'ÁGUAS DE SENTINA', image: 'assets/aguas-de-sentina.png' },
  ]

  getRegions() {
    return this.regions
  }
}
