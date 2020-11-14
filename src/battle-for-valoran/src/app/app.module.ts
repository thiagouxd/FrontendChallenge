import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Button } from './components/button/button.component'
import { Input } from './components/input/input.component'
import { Title } from './components/title/title.component'
import { Home } from './pages/home/home.component'
import { InfoTeamManager } from './pages/info-team-manager/info-team-manager.component'
import { Container } from './components/container/container.component'
import { Paragraphy } from './components/paragraphy/paragraphy.component'
import { Divisor } from './components/divisor/divisor.component'
import { TeamManager } from './pages/team-manager/team-manager.component'

@NgModule({
  declarations: [
    AppComponent,
    Button,
    Input,
    Title,
    Home,
    InfoTeamManager,
    Container,
    Paragraphy,
    Divisor,
    TeamManager,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
