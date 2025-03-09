import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { Genero } from '../../types/genero';
import { Livro } from '../../types/livro';
import { livros } from '../../types/mock.livros';

@Component({
  selector: 'app-livro-lista',
  imports: [GeneroComponent],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  generos: Genero[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map<string, Livro[]>();

  ngOnInit() {
    this.livrosPorGenero = new Map<string, Livro[]>();
    livros.forEach(livro => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
      }
    );

    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get('tecnicos') ?? [],
      },
    ];

    console.log(this.livrosPorGenero);
  }

}
