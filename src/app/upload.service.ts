import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';
import {Achievement, TeamAchievement, Team, File } from './data/team.service';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  DJANGO_SERVER: string = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }



  public upload(formData) {
    return this.http.post<File>(environment.INSAExpressApi+'/manage/upload/', formData);
  }

  public postAchievement(achievement, team, id) {
    return this.http.post<TeamAchievement>(environment.INSAExpressApi + `/manage/team_achievements/`, 
    {
      'achievement_id': achievement.id,
      'team_id': team.id,
      'photo_id': id
    }

    );
  }



}
