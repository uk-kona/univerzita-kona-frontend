import { Component, OnInit } from '@angular/core';
import { ContentType } from './shared/constants/constants';


import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-univerzita-kona',
  templateUrl: './univerzita-kona.component.html',
  styleUrls: ['./univerzita-kona.component.scss']
})
export class UniverzitaKonaComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

}
