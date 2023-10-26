import GerenciadorFilmes from "../filmes/gerenciador-filmes";
import RepositorioFilmes from "../filmes/repositorio-filmes";

jest.mock("../filmes/repositorio-filmes");

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

      gerenciador.repositorio.count.mockReturnValue(1);
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

      gerenciador.repositorio.count.mockReturnValue(1);
      const tamanhoInicial = gerenciador.getTotal();

      gerenciador.repositorio.listar.mockReturnValue([filme]);
      gerenciador.remFilme(filme);

      gerenciador.repositorio.count.mockReturnValue(0);
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

    test("Não deve ser possível remover um filme inexistente", () => {
      const filme = {
        titulo: "Scott Pilgrim contra o Mundo",
        ano: 2010,
        genero: ["Aventura", "Romance"],
      };

      const filmesMock = [
        {
          titulo: "Shrek",
          ano: 2001,
          genero: ["Comédia"],
        },
        {
          titulo: "Sempre ao seu lado",
          ano: 2016,
          genero: ["Drama"],
        },
      ];

      gerenciador.repositorio.listar.mockReturnValue(filmesMock);

      expect(() => gerenciador.remFilme(filme)).toThrowError();
    });
  });

  afterEach(() => jest.clearAllMocks());
});
