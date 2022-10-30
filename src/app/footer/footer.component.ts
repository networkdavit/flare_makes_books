import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright_text: string = "";
  current_year: any = "";

  constructor() { }

  ngOnInit(): void {
    this.current_year = new Date().getFullYear();
    this.copyright_text = `© ${this.current_year} Copyright`
  }

}
