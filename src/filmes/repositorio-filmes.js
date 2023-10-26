export default class RepositorioFilmes {
  constructor() {
    this.filmes = [];
  }

  inserir(filme) {
    this.filmes.push(filme);
  }

  remover(filme) {
    this.filmes.splice(this.filmes.indexOf(filme, 0), 1);
  }

  listar() {
    return Array.from(this.filmes);
  }

  count() {
    return 0;
  }
}
