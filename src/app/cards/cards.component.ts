import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any = [];
  rows: any= []

  constructor() { }

  ngOnInit(): void {
    this.rows = [1,2,3]
    this.cards = [1,2,3,4]
  }

}
