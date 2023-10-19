import GerenciadorFilmes from "../filmes/gerenciador-filmes";

describe("Gerenciador de filmes", () => {
  let gerenciador = null;

  beforeEach(() => {
    gerenciador = new GerenciadorFilmes();
  });

  describe("Fluxo normal", () => {
    test("Deve ser possível adicionar um filme", () => {
      // Pré-condições
      const filme = {
        titulo: "Interstellar",
        ano: 2014,
        genero: ["Ficção Científica", "Aventura"],
      };

      // Passos
      gerenciador.addFilme(filme);

      // Pós-condições
      const totalFilmes = gerenciador.getTotal();
      expect(totalFilmes).toBe(1);
    });

    test("Deve ser possível remover um filme", () => {
      const filme = {
        titulo: "Oppenheimer",
        ano: "2023",
        genero: ["Drama"],
      };
      gerenciador.addFilme(filme);
      const tamanhoInicial = gerenciador.getTotal();
      gerenciador.remFilme(filme);
      const tamanhoFinal = gerenciador.getTotal();
      expect(tamanhoFinal).toBeLessThan(tamanhoInicial);
    });
  });

  describe("Fluxos de exceção", () => {
    test("Filme sem titulo", () => {
      const filme = {
        ano: "2023",
        genero: ["Drama"],
      };
      expect(() => {
        gerenciador.addFilme(filme);
      }).toThrowError();
    });

    test("Filme com titulo vazio", () => {
      const filme = {
        titulo: "",
        ano: "2023",
        genero: ["Drama"],
      };
      expect(() => {
        gerenciador.addFilme(filme);
      }).toThrowError();
    });
  });
});
