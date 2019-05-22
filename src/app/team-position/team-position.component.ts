import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../data/ma_liste_de_teams';
import { Team, TeamsService } from '../data/team.service';
import * as L from 'leaflet';
//import { iD } from '../app-routing.module'

@Component({
  selector: 'app-team-position',
  templateUrl: './team-position.component.html',
  styleUrls: ['./team-position.component.css']
})



export class TeamPositionComponent implements OnInit {

  teams: Team[];
  center = L.latLng(48.75, 4.85);
  bounds;
  zoom = 30;
  layers = [];
//  iD = iD;

  selectedTeam : Team;

  constructor(private teamService: TeamsService) { }

  ngOnInit() {

    this.getTeams();
/*    this.teams.forEach((team) => {
      this.onSelect(team, iD);
    });*/
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const mymap = L.map('mapfrance').setView([45.750000, 4.850000], 13);
/*    var IDpos = [];

    {% for o in Teamlist %}
            {% if o.id == teams.id}
              IDpos.push( [parseFloat("{{o.latitude}}"),parseFloat("{{o.longitude}}")] )*/

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'France Map'
    }).addTo(mymap);

    const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });

    L.marker([45, 4], {icon: myIcon}).addTo(mymap).openPopup(); //ici qu'on centre la carte





 }

 onSelect(team: Team): void{
     this.selectedTeam = team;
 }

 getTeams(): void {
   this.teamService.getTeams().subscribe((teams) => {
     teams.sort((a, b) => b.score - a.score);
     let minLat = Number.MAX_VALUE, maxLat = Number.MIN_VALUE, minLng = Number.MAX_VALUE, maxLng = Number.MIN_VALUE;
     this.layers = [];
     teams.forEach((team) => {
       if (typeof team.latitude === 'number' && !Number.isNaN(team.latitude) &&
         typeof team.longitude === 'number' && !Number.isNaN(team.longitude)) {
         if (minLat > team.latitude) {
           minLat = team.latitude;
         }
         if (maxLat < team.latitude) {
           maxLat = team.latitude;
         }
         if (minLng > team.longitude) {
           minLng = team.longitude;
         }
         if (maxLng < team.longitude) {
           maxLng = team.longitude;
         }
         this.layers.push(L.marker([team.latitude, team.longitude], {
           icon: L.icon({
             iconSize: [25, 41],
             iconAnchor: [13, 41],
             iconUrl: 'assets/marker-icon.png',
             shadowUrl: 'assets/marker-shadow.png'
           })
         }));
       }
     });
     minLng -= 0.0035;
     maxLng += 0.0035;
     minLat -= 0.0025;
     maxLat += 0.0025;
     this.center = L.latLng((minLat + maxLat) / 2, (minLng + maxLng) / 2);
     this.bounds = L.latLngBounds(L.latLng(minLat, minLng), L.latLng(maxLat, maxLng));
     console.log(minLat, minLng, maxLat, maxLng, this.bounds);
     this.teams = teams;
   });
 }
}
