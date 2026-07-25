/**
 * Favorito (notícia, artigo opinativo, postagem de blog, etc.).
 */
export interface IFavorito {

  /**
   * Identificador único do favorito.
   */
  _id: number;

  /**
   * URL da imagem que ilustra o favorito.
   */
  imagem: string;

  /**
   * Título (descrição curta) do favorito.
   */
  titulo: string;

  /**
   * Descrição (longa) / chamada do favorito (1 parágrafo curto).
   */
  descricao: string;

  /**
   * URL do favorito.
   */
  url: string;

}
