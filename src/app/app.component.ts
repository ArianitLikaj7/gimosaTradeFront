import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import {CreateClientComponent} from "./components/create-client/create-client.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    CreateClientComponent,
    ClientsComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class AppComponent{
  title = 'menaxhim-test';
}
