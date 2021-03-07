import { FilmeTypeEnum } from "@/features/filmes/utils/enum/filmeTypeEnum";

export default class RotasConstants {
    public static readonly FILMES_POPULARES = `/filmes/${FilmeTypeEnum.popular}`;
    public static readonly FILMES_NOS_CINEMAS = `/filmes/${FilmeTypeEnum.nowPlaying}`;
    public static readonly FILMES_MAIS_VOTADOS = `/filmes/${FilmeTypeEnum.topRated}`;
    public static readonly FILMES_LANCAMENTOS = `/filmes/${FilmeTypeEnum.upcoming}`;
}