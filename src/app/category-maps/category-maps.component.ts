import { Component, OnInit } from '@angular/core';
import { map_list } from '../content';

@Component({
  selector: 'app-category-maps',
  templateUrl: './category-maps.component.html',
  styleUrls: ['./category-maps.component.css']
})
export class CategoryMapsComponent implements OnInit {

  map_list: any[] = []
  loading: boolean = true;
  show_content: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.loader();
    this.map_list = map_list;
  }

  async loader() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loading = false;
    this.show_content = true;
  }

}
