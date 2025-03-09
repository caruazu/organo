import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J. R. R. Tolkien',
  };
}
