import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input('Buscar');

  inputValorEvent = output<string>();

  setInputValor(valor: string) {
    this.inputValorEvent.emit(valor);
  }
}
