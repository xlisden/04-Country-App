import { Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {
  placeholder = 'Buscar por Capital';

  onSearch(value: string) {
    console.log(`ByCapital-onSearch => ${value}`);
  }
}
