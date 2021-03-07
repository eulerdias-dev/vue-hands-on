import { FilmeTypeEnum } from "../../utils/enum/filmeTypeEnum";

export default class FilmeRequest {
    constructor(public tipo: string, public pagina: number) {}
}