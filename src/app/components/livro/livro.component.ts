import { Component } from '@angular/core';
import { Livro } from '../../types/livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro: Livro = {
    imagem: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._SL1500_.jpg',
    titulo: 'O Senhor dos Anéis',
    autor: 'J. R. R. Tolkien',
    favorito: false,
    genero: 'Ficção'
  };

  favoritar() {
    this.livro.favorito = !this.livro.favorito;
  }
}
