import { Component } from '@angular/core';
import { KeycloakService } from './keycloak/keycloak.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INSA EXPRESS 3.0';
  logout(): void{
    KeycloakService.logout();
  }
}
