import { Component, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
@Component({
  selector: 'app-laboratoris',
  templateUrl: './laboratoris.component.html',
  styleUrls: ['./laboratoris.component.css']
})
export class LaboratorisComponent implements OnInit {
  lat = 19.290950;
  lng = -99.653015;
  zoom = 10;

  constructor() { }

  ngOnInit(): void {
  }

}


