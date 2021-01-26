import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.css']
})
export class NoticiesComponent implements OnInit {
  url;
  articles;
  datos;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
   console.log(data);
   this.articles = data['articles'];
    });


}

  goToLink(url: {}): void{
    window.open(url.toString(), '_blank');
  }
}
