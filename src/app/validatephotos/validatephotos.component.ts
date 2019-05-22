import { Directive, Component, OnInit, Input } from '@angular/core';
import { Achievement, Team, TeamAchievement, TeamsService } from '../data/team.service';
import { AchievementsService } from '../data/achievements.service';
import {Http} from '@angular/http';

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
              private teamsService: TeamsService) { }

  ngOnInit() {

  this.getTeamAchievement();
  this.getTeams();

  }

  onSubmit() {



  }
  getTeams(): void {
    this.teamsService.getTeams().subscribe((teams) => {
      teams.sort((a, b) => b.score - a.score);
      this.teams = teams;
    });
  }

  getTeamAchievement(): void {
    this.achievementsService.getTeamAchievement().subscribe((teamachievements) => {
      this.teamachievements = teamachievements;
    });
  }





 
}
