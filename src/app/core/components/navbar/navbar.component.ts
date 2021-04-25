import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          url: '/browse/home'
      },
      {
          label: 'Movies',
          items: [
              { label: 'Anime' },
              { label: 'Romance' }
          ]
      },
      {
          label: 'Tv Shows',
          items: [
              { label: 'Anime' },
              { label: 'Romance' }
          ]
      }
  ];
  }

}
