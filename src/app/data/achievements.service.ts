import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Achievement, TeamAchievement, Team } from './team.service';
import {environment} from '../../environments/environment';

@Injectable(  
  {providedIn: 'root'}
)
export class AchievementsService {

  constructor(private http: HttpClient) {
  }

  getAchievements(): Observable<Achievement[]> {
    return new Observable((obs) => {
      const refresh = () => this.http.get<Achievement[]>(environment.INSAExpressApi + '/manage/achievements/').subscribe((achievements) => {
        obs.next(achievements);
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

  getAchievement(id: string): Observable<Achievement> {
    return this.http.get<Achievement>(environment.INSAExpressApi + '/manage/achievements/' + id + '/');
  }


  getTeamAchievement(): Observable<TeamAchievement[]> {
    return new Observable((obs) => {
      const refresh = () => this.http.get<TeamAchievement[]>(environment.INSAExpressApi + '/manage/team_achievements/').subscribe((teamachievements) => {
        obs.next(teamachievements);
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

  getNotValidAchievement(): Observable<TeamAchievement[]> {
    return new Observable((obs) => {
      const refresh = () => this.http.get<TeamAchievement[]>(environment.INSAExpressApi + '/manage/validate/false/').subscribe((teamachievements) => {
        obs.next(teamachievements);
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

  validateAchievement(id: number, achievement): Observable<TeamAchievement> {
    return this.http.put<TeamAchievement>(environment.INSAExpressApi + '/manage/validate/false/' + id + '/', {'validation': true });
  }



  deleteAchievement(id: number): Observable<TeamAchievement> {
    return this.http.delete<TeamAchievement>(environment.INSAExpressApi + '/manage/validate/false/' + id + '/');
  }


}
