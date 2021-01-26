import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-evolucio',
  templateUrl: './evolucio.component.html',
  styleUrls: ['./evolucio.component.css']
})
export class EvolucioComponent implements OnInit {
  datas;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDataCovid().subscribe((data) => {

      this.datas = data['dates'][this.apiService.getdate()]['countries']['Spain']['regions'];
      console.log(this.datas);

    });
  }

}
