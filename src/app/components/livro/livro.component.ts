import { Component, input } from '@angular/core';
import { Livro } from '../../types/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livroSignal = input.required<Livro>();

  favoritar() {
    this.livroSignal().favorito = !this.livroSignal().favorito;
  }
}
