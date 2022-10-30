import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any = [];
  rows: any= []

  constructor() { }

  ngOnInit(): void {
    this.rows = [1,2]
    this.cards = [1,2,3,4]
  }

}
