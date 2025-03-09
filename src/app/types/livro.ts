import { Genero } from "./genero";

export interface Livro {
  imagem: string;
  titulo: string;
  autoria: string;
  genero: Genero;
  favorito: boolean;
}
