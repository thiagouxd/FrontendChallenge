import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button } from './components/button/button.component';
import { Input } from './components/input/input.component';
import { Title } from './components/title/title.component';
import { Home } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, Button, Input, Title, Home],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
