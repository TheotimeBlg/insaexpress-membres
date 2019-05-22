import { Directive, Component, OnInit, Input } from '@angular/core';
import { Achievement, Team, TeamAchievement, TeamsService } from '../data/team.service';
import { AchievementsService } from '../data/achievements.service';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-validatephotos',
  templateUrl: './validatephotos.component.html',
  styleUrls: ['./../../assets/css/main.css', './validatephotos.component.css']
})


export class ValidatephotosComponent implements OnInit {

  files: File[];
  teams: Team[];
  teamachievements: TeamAchievement[];
  
  

  constructor(private achievementsService: AchievementsService,
              private teamsService: TeamsService,
              private router: Router) { }

  ngOnInit() {

  this.getNotValidAchievement();
  this.getTeams();

  }

  validate(id, achievement) {
   this.achievementsService.validateAchievement(id, achievement).subscribe(
      () => {
        alert("ok");
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
        this.router.navigate(['validerdefis']);
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
