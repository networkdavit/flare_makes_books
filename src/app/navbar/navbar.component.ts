import { Component, OnInit } from '@angular/core';
import categories from '../categories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = categories;
  constructor() { }

  ngOnInit(): void {
    console.log(categories)
  }

}
