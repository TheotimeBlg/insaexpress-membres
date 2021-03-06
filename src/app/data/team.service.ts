import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

export class Achievement {
  id: number;
  name: string;
  points: number;
}

export class Team {
  id: number;
  name: string;
  picture: string;
  latitude: number;
  longitude: number;
  score: number;
  disqualified: boolean;
  team_achievements: TeamAchievement[];
  participants: {name: string, phone: string}[];
}

export class TeamAchievement {
  created_at: string;
  achievement: Achievement;
  achievement_id: number;
  team_id: number;
  photo_id: number;
  validation: boolean;
}

export class File {
  id: number;
  file: string;
}

@Injectable(
  {providedIn: 'root'}
)
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return new Observable((obs) => {
      const refresh = () => this.http.get<Team[]>(environment.INSAExpressApi + '/teams/').subscribe((teams) => {
        obs.next(teams);
        if (!obs.closed) {
          setTimeout(refresh, 30000);
        } else {
          obs.complete();
        }
      }, (err) => {
        obs.error(err);
      });

      refresh.call(this);
    });
  }

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(environment.INSAExpressApi + '/teams/' + id + '/');
  }

  getFiles(): Observable<File[]> {
    return new Observable((obs) => {
      const refresh = () => this.http.get<File[]>(environment.INSAExpressApi + '/manage/upload/').subscribe((files) => {
        obs.next(files);
        if (!obs.closed) {
          setTimeout(refresh, 30000);
        } else {
          obs.complete();
        }
      }, (err) => {
        obs.error(err);
      });

      refresh.call(this);
    });
  }


  getFile(id: number): Observable<File> {
    return this.http.get<File>(environment.INSAExpressApi + '/manage/upload/' + id + '/');
  }

}
