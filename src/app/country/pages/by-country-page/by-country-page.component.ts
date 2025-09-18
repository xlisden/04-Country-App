import { Component, inject, signal, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {
  placeholder = 'Buscar por País';
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if ( !params.query ) return of([]);

      return this.countryService.searchByCountry(params.query);
    },
  });
}
