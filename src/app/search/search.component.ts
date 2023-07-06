import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { countries } from '../models/contries';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  typeahead: FormControl = new FormControl();
  countries: String[] = countries;

  suggestion: String[] = [];
  suggest(){
    this.suggestion = this.countries
    .filter(c=> c.toLowerCase().startsWith(this.typeahead.value.toLowerCase()))
    .slice(0,5)
  }
}
