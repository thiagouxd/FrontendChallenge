import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Home } from './pages/home/home.component'
import { InfoTeamManager } from './pages/info-team-manager/info-team-manager.component'
import { TeamManager } from './pages/team-manager/team-manager.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'info-team-manager', component: InfoTeamManager },
  { path: 'team-manager', component: TeamManager },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
