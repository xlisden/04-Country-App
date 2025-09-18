import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { CountryInfoPageComponent } from "./country-info-page/country-info-page.component";

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInfoPageComponent],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {
  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.params['codeCountry']; // snapshot no es reactivo

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => {
      return this.countryService.searchByAlfaCode(params.code);
    }
  });
}
