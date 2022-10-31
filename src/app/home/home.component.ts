import { Component, OnInit } from '@angular/core';
import {featured_books, featured_maps} from '../content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featured_books: any = [];
  featured_maps: any = [];
  loading: boolean = true;
  rows: any= []

  constructor() { }

  ngOnInit(): void {
    this.loader()
    this.rows = [1,2]
    this.featured_books = featured_books;
    this.featured_maps = featured_maps;
  }

  async loader() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loading = false;
  }
}
