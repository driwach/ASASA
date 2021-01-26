import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  ApiKey = '046d2095c9da43a9abac97fb5612844f';
  // tslint:disable-next-line:typedef
    public getNews(){
    return this.httpClient.get(`http://newsapi.org/v2/everything?q=covid&languages=es,en&apiKey=${this.ApiKey}`);
    }
  // tslint:disable-next-line:typedef
    public getdate(){
      // tslint:disable-next-line:one-variable-per-declaration prefer-const
      let d = new Date(),
        // tslint:disable-next-line:prefer-const
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        // tslint:disable-next-line:prefer-const
        year = d.getFullYear();

      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }

      return  [year, month, day].join('-');
     // return  '2021-01-21';
    }
  // tslint:disable-next-line:typedef
    public getDataCovid(){
      // tslint:disable-next-line:one-variable-per-declaration prefer-const
      return this.httpClient.get(`https://api.covid19tracking.narrativa.com/api/${this.getdate()}/country/spain`);
    }
}

