import { Livro } from "./livro";

export interface Genero {
  id: string;
  value: string;
  livros: Livro[];
}
