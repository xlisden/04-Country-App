import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../../shared/components/top-menu/top-menu.component";


@Component({
  selector: 'app-country-layout-page',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layout-page.component.html',
})
export default class CountryLayoutPageComponent { }
