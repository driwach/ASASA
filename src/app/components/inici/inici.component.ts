import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  btnNoticies = function(): void {
    this.router.navigateByUrl('/noticies');
  };
  btnEvolucio = function(): void {
    this.router.navigateByUrl('/evolucio');
  };
  btnLaboratoris = function(): void {
    this.router.navigateByUrl('/laboratoris');
  };
  btnProva = function(): void{
    this.router.navigateByUrl('/prova');
  };
}
