import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  options = [
    {name: 'Tos', value: '1', checked: false},
    {name: 'Febre', value: '2', checked: false},
    {name: 'Dificultat per respirar', value: '3', checked: false},
    {name: 'Dolors musculars o corporals', value: '3', checked: false},
    {name: 'Mal de coll', value: '3', checked: false},
    {name: 'Pèrdua de gust o olor', value: '3', checked: false},
    {name: 'Diarrea', value: '3', checked: false},
    {name: 'Cefalea', value: '3', checked: false},
    {name: 'Nàusees o vòmits', value: '3', checked: false},
    {name: 'Congestió o secreció nasal', value: '3', checked: false}


  ];

  // tslint:disable-next-line:typedef
public suspicious ;
public finished = false;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  get selectedOptions() { // right now: ['1','3']
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }
  showresutls(): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[0].checked && this.options[1].checked && this.options[5].checked ){
        this.suspicious  = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[2].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[3].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[6].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[7].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[8].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[1].checked  && this.options[9].checked ){
        this.suspicious = true;
      }else if (this.options[0].checked && this.options[4].checked  && this.options[5].checked ){
        this.suspicious = true;
      }else if (this.options[1].checked && this.options[4].checked  && this.options[5].checked ){
        this.suspicious = true;
      }else if (this.options[6].checked && this.options[2].checked  && this.options[5].checked ){
        this.suspicious = true;
      }else if (this.options[9].checked && this.options[8].checked  && this.options[7].checked ){
        this.suspicious = true;
      }else {
        this.suspicious = false;
      }
    }
    this.finished = true;
  }

reset(): void{
    this.finished = false;
    this.suspicious = false;
    for (const op of this.options) {
    op.checked = false;
  }
}

}
