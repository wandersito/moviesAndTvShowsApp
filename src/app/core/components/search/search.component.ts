import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedCountry: any;

  filteredCountries: any[] = ['Juan', 'David'];

  countries: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  filterCountry() {

    this.filteredCountries = [
      {name: 'Juan'}, {name: 'David'}];
  }


}
