import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { Genero } from '../../types/genero';

@Component({
  selector: 'app-genero',
  imports: [LivroComponent],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css',
})
export class GeneroComponent {
  genero = input.required<Genero>();
}
