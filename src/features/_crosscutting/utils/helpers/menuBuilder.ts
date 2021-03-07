import MenuAplicacao from "../../models/menu/menuAplicacao";

export default class MenuBuilder {
  public static gerar(): MenuAplicacao[] {
    return [
      {
        titulo: "Filmes",
        submenus: [
            {
                titulo: "Populares",
                link: ""
            },
            {
                titulo: "Mais votados",
                link: ""
            },
            {
                titulo: "Nos cinemas",
                link: ""
            },
            {
                titulo: "Lançamentos",
                link: ""
            },
        ]
      },
      {
        titulo: "Séries",
          submenus: [
            {
                titulo: "Populares",
                link: ""
            },
            {
                titulo: "Mais votados",
                link: ""
            },
          ]
      }
    ] as MenuAplicacao[];
  }
}
