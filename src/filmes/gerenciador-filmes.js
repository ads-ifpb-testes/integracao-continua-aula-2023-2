import RepositorioFilmes from "./repositorio-filmes";

export default class GerenciadorFilmes {
  constructor() {
    this.repositorio = new RepositorioFilmes();
  }

  addFilme(filme) {
    if (!("titulo" in filme)) {
      throw Error("Filme deve ter a propriedade título");
    }
    if (filme.titulo.trim().length === 0) {
      throw Error("Título do filme não pode ser vazio");
    }
    this.repositorio.inserir(filme);
  }

  remFilme(filme) {
    const filmesAtuais = this.repositorio.listar();
    const indexFilme = filmesAtuais.indexOf(filme, 0);
    if (indexFilme < 0) {
      throw new Error("O filme informado para remoção não existe");
    }
    return this.repositorio.remover(filme);
  }

  getTotal() {
    return this.repositorio.count();
  }
}
