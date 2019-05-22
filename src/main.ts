import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
import './polyfills';
=======
import { KeycloakService } from './app/keycloak/keycloak.service';
>>>>>>> 042591dcce24fa21c2f3e343414aa8b6a9c6a3ce

if (environment.production) {
  enableProdMode();
}


KeycloakService.init()
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(err => console.error(err));


