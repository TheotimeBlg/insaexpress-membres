import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
import { DefisComponent } from './defis/defis.component';
import { ValidatephotosComponent } from './validatephotos/validatephotos.component';
import { TeamPositionComponent } from './team-position/team-position.component';
import { Team } from './data/team.service';
import { RapportComponent } from './rapport/rapport.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import {TeamDetailsComponent} from './team-details/team-details.component';
import { CharteComponent } from './charte/charte.component';



const routes: Routes = [
	{ path: '', component: NewComponent },
	{ path: 'defis', component: DefisComponent },
	{ path: 'teams/:id/position', component: TeamPositionComponent },
	{ path: 'ajoutdefis', component: UploadphotosComponent },
	{ path: 'validerdefis', component: ValidatephotosComponent },
	{ path: 'rapport', component: RapportComponent},
	{ path: 'back', component: BackComponent},
	{ path: 'front', component: FrontComponent},
	{ path: 'team/:id', component: TeamDetailsComponent},
	{ path: 'charte', component: CharteComponent},

];

/*const iD: Team["id"].parseInt() = [('teams/:id/position').split('/')[1]
];

export { iD }*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
