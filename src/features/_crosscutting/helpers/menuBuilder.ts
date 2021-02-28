import MenuAplicacao from "../models/menu/menuAplicacao";

export default class MenuBuilder {
  public gerar(): MenuAplicacao[] {
    return [
      {
        menu: "Filmes",
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
          menu: "Séries",
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
