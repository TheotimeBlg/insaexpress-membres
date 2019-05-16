import { Directive, Component, OnInit, Input } from '@angular/core';
import { Achievement, Team, TeamsService, TeamAchievement } from '../data/team.service';
import { AchievementsService } from '../data/achievements.service';
import {Http} from '@angular/http';
/*import {BROWSER_SANITIZATION_PROVIDERS, DomSanitizationService} from '@angular/platform-browser';*/

@Component({
  selector: 'app-validatephotos',
  templateUrl: './validatephotos.component.html',
  styleUrls: ['./../../assets/css/main.css', './validatephotos.component.css']
})
/*
@Directive({
  selector: '[form-image]',
  providers: [eBROWSER_SANITIZATION_PROVIDERS],
  host: {
    '[src]': 'imageSrc'
  }
})*/

export class ValidatephotosComponent implements OnInit {

  teams: Team[];
  teamachievements: TeamAchievement[];
/*  api_url: 'http://localhost:8000/';
  imageSrc: any;
  image: any; 
  @Input('form-image') nomimage: string;*/
  


  constructor(private http: Http,
  			  private teamsService: TeamsService,
              private achievementsService: AchievementsService) { }

  ngOnInit() {

  this.getTeamAchievement();

  /*this.http.get(""http://localhost:8000/upload/" + nomimage)
      .map(image => image.text())
      .subscribe(
        data => {
          this.image = 'data:image/png;base64,' + data;
          this.imageSRC = sanitizer.bypassSecurityTrustUrl(image);
        }
      );*/

  }
  getTeamAchievement(): void {
    this.achievementsService.getTeamAchievement().subscribe((teamachievements) => {
      this.teamachievements = teamachievements;
    });
  }

 
}
