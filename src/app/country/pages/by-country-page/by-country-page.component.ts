import { Component } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {
  placeholder = 'Buscar por país';

  onSearch(valor: string) {
    console.log(`ByCountry-onSearch => ${valor}`);

  }
}
