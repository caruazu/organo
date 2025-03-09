import { Component, input } from '@angular/core';
import { Livro } from '../../types/livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livroSignal = input.required<Livro>();

  favoritar() {
    this.livroSignal().favorito = !this.livroSignal().favorito;
  }
}
