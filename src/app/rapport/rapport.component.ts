import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../data/ma_liste_de_teams';
import { Team, TeamsService } from '../data/team.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./../../assets/css/main.css',
              './rapport.component.css']
})
export class RapportComponent implements OnInit {

  teams: Team[];
  center = L.latLng(46.227, 2.213);
  bounds;
  zoom = 16;
  layers = [];


  selectedTeam : Team;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {

    this.getTeams();


  }
  getTeams(): void {
    this.teamsService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
