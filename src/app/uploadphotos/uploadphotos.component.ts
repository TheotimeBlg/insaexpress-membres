import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Achievement, Team, TeamsService, TeamAchievement } from './../data/team.service';
import { AchievementsService } from './../data/achievements.service';
import { UploadService } from '../upload.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./../../assets/css/main.css',
              './uploadphotos.component.css', ]
})
export class UploadphotosComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  teams: Team[];
  team: Team;
  achievements: Achievement[]; //on recupere la liste des defis
  achievement: Achievement; //on recupere le defi soumis
  teamachievements: TeamAchievement[];
  selectedEquipe;
  selectedDefi;
  url;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder, 
              private uploadService: UploadService, 
              private achievementsService: AchievementsService,
              private teamsService: TeamsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        photos: [''], defis: [''], equipe: ['']
      });

/*    this.achievementsService.getTeamAchievement().subscribe((teamachievements) => {
      this.teamachievements = teamachievements;
    }); */

    this.achievementsService.getAchievements().subscribe((achievements) => {
      this.achievements = achievements;
    });

    this.teamsService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });



  }

 /* onUpload() {

  // this.http is the injected HttpClient
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  this.http.post('http://localhost:8000/manage/team_achievements/', this.team.id, uploadData)
    .subscribe(() => {
        alert("Parfait");
      },
      () => {
        alert('Impossible d\'affecter la réussite :-(');
      });
  }*/
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];


    this.teamsService.getTeam(this.selectedEquipe).subscribe((team) => {
        this.team = team;
    });
    
    this.achievementsService.getAchievement(this.selectedDefi).subscribe((achievement) => {
          this.achievement = achievement;
    }); 

  }


  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('photos').setValue(file);
    }

    this.teamsService.getTeam(this.selectedEquipe).subscribe((team) => {
        this.team = team;
    });
    
    this.achievementsService.getAchievement(this.selectedDefi).subscribe((achievement) => {
          this.achievement = achievement;
    }); 
  } 

  onSubmit() {
    const formData = new FormData(); 
    formData.append('file', this.selectedFile);

    this.url = environment.INSAExpressApi+`/manage/upload/`;

    this.uploadService.upload(this.achievement, this.team, formData).subscribe(
      () => {
        alert("Parfait");
      },
      () => {
        alert('Impossible d\'affecter la réussite :-(');
      }
    );

  }

}
   
  

 




