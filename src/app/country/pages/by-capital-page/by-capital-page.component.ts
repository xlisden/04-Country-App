import { Component, inject, signal, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ListComponent } from "../../components/list/list.component";
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {
  placeholder = 'Buscar por Capital';
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if ( !params.query ) return of([]);

      return this.countryService.searchByCapital(params.query)
    },
  });

}
