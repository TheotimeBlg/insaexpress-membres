import { Directive, Component, OnInit, Input } from '@angular/core';
import { Achievement, Team, TeamAchievement, TeamsService } from '../data/team.service';
import { AchievementsService } from '../data/achievements.service';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';
import {OrderModule} from 'ngx-order-pipe';

@Component({
  selector: 'app-validatephotos',
  templateUrl: './validatephotos.component.html',
  styleUrls: ['./../../assets/css/main.css', './validatephotos.component.css']
})

export class ValidatephotosComponent implements OnInit {

  files: File[];
  teams: Team[];
  teamachievements: TeamAchievement[];
  isOrga: boolean = false;

  constructor(private achievementsService: AchievementsService,
              private teamsService: TeamsService,
              private router: Router) { }

  ngOnInit() {

  this.getNotValidAchievement();
  this.getTeams();


    this.isOrga = KeycloakService.auth.authz.realmAccess.roles.indexOf("Orga") > -1;


  }

  validate(id, achievementid, teamid, photoid) {
   this.achievementsService.validateAchievement(id, achievementid, teamid, photoid).subscribe(
      () => {
        window.location.reload()
      },
      () => {
        alert('pas ok');
      }
    );
  }

  delete(id){
    this.achievementsService.deleteAchievement(id).subscribe(
      () => {
        window.location.reload()
      },
      () => {
        alert('pas ok');
      }
    );

  }


  getTeams(): void {
    this.teamsService.getTeams().subscribe((teams) => {
      teams.sort((a, b) => b.score - a.score);
      this.teams = teams;
    });
  }

  getNotValidAchievement(): void {
    this.achievementsService.getNotValidAchievement().subscribe((teamachievements) => {
      this.teamachievements = teamachievements;
    });
  }






}
