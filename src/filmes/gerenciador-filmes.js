export default class GerenciadorFilmes {
  constructor() {
    this.filmes = [];
  }

  addFilme(filme) {
    if (!("titulo" in filme)) {
      throw Error("Filme deve ter a propriedade título");
    }
    if (filme.titulo.trim().length === 0) {
      throw Error("Título do filme não pode ser vazio");
    }
    this.filmes.push(filme);
  }

  remFilme(filmeParaRemocao) {
    const indice = this.filmes.indexOf(filmeParaRemocao, 0);
    return this.filmes.splice(indice, 1);
  }

  getTotal() {
    return this.filmes.length;
  }
}
