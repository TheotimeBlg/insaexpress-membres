import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterState} from '@angular/router';
import {Team,Achievement, TeamAchievement, TeamsService} from '../data/team.service';
import {latLng, latLngBounds, tileLayer} from 'leaflet';
import * as leaflet from 'leaflet';
import { AchievementsService } from '../data/achievements.service';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css', '../../assets/css/main.css']
})
export class TeamDetailsComponent implements OnInit {
  team: Team;
  team_achievements: TeamAchievement[];
  achievements: Achievement[];
  marker: leaflet.Marker;
  private map: leaflet.Map;
  options = {
    zoom: 6,
    center: latLng(46.227638, 2.213749),
  };

  constructor(private routerParams: ActivatedRoute,
              private teamsService: TeamsService,
              private achievementsService: AchievementsService,
              private http: HttpClient) {}

  ngOnInit() {
    //this.getTeam(id);
  //  this.getAchievements();
    this.routerParams.params.subscribe(
      (params) => {
        this.teamsService.getTeam(params['id']).subscribe(
          (team) => {
            this.team_achievements = team.team_achievements.reverse();
            this.team = team;
            if (this.map) {
              if (this.marker) {
                this.marker.remove();
              }
            //  const marker = this.marker = this.generateMarker(this.team);
            //  marker.addTo(this.map);
            //  this.refreshMapBounds(this.team, this.map);
            }
          }
        );
      }
    );
  }
  /*getAchievements(): void {
    this.achievementsService.getAchievements().subscribe((achievements) => {
      this.achievements = achievements;
    });
  }


/*  onMapReady(map: any) {
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    leaflet.control.scale().addTo(map);
    if (this.team) {
      if (this.marker) {
        this.marker.remove();
      }
      const marker = this.marker = this.generateMarker(this.team);
      marker.addTo(map);
      this.refreshMapBounds(this.team, map);
    }
    this.map = map;
  }


  private refreshMapBounds(team: Team, map: any) {
    let minLat = team.latitude, maxLat = team.latitude, minLng = team.longitude, maxLng = team.longitude;
    minLng -= 0.0335;
    maxLng += 0.0335;
    minLat -= 0.0225;
    maxLat += 0.0225;
    const bounds = latLngBounds(latLng(minLat, minLng), latLng(maxLat, maxLng));
    map.fitBounds(bounds);
  }

  generateMarker(team: Team) {
    const marker = leaflet.marker([team.latitude, team.longitude], {
      icon: leaflet.icon({
        iconSize: [42, 42],
        iconAnchor: [21, 21],
        iconUrl: team.picture,
      })
    });
    marker.setLatLng(latLng(team.latitude, team.longitude));
    marker.bindTooltip(team.name);
    return marker;
  } */

}
