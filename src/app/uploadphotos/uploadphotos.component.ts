import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Achievement, Team, TeamsService, TeamAchievement, File } from './../data/team.service';
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
  fichiers: File[];
  fichier: File;
  selectedEquipe;
  selectedDefi;
  selectedFile;
  maxID = 1;

  constructor(private formBuilder: FormBuilder, 
              private uploadService: UploadService, 
              private achievementsService: AchievementsService,
              private teamsService: TeamsService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        photos: [''], defis: [''], equipe: ['']
      });

    this.achievementsService.getAchievements().subscribe((achievements) => {
      this.achievements = achievements;
    });

    this.teamsService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });



  }

  onFileChanged(event) {

    this.teamsService.getTeam(this.selectedEquipe).subscribe((team) => {
        this.team = team;
    });
    
    this.achievementsService.getAchievement(this.selectedDefi).subscribe((achievement) => {
          this.achievement = achievement;
    }); 

    this.selectedFile = event.target.files[0];

    const formData = new FormData(); 
    formData.append('file', this.selectedFile);

    this.uploadService.upload(formData).subscribe(
      () => {
      },
      () => {
        alert('Impossible de charger la photo :-(');
      }
    );

    this.teamsService.getFiles().subscribe((fichiers) => {
      this.fichiers = fichiers;
    });
     

  }

  onSubmit() {
    for(let fichier of this.fichiers) {
      if (fichier.id > this.maxID) {
        this.maxID = fichier.id;
      }
    } 
    this.uploadService.postAchievement(this.achievement, this.team, this.maxID+1).subscribe(
      () => {
        this.router.navigate(['']);
        //alert("C\'est bon ! Ton défi sera peut-être validé, bonne chance !");
      },
      () => {
        alert('Impossible d\'affecter la photo :-(');
      }
    );

  }

}
   
  

 




