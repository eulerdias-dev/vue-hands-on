import Vue from "vue";
import FilmeRequest from "../models/request/filmeRequest";
import axios from "axios";
import FilmeResult from "../models/result/filmeResult";

export default class FilmeRepository extends Vue{
    private readonly base_url = "filmes"

    public async obterPor(request: FilmeRequest): Promise<FilmeResult> {
        try {
            const result = await axios.get(`/${this.base_url}/${request.tipo}/${request.pagina}`);
            return result.data.data;
        } catch (error) {
            throw new Error(`Erro ao tentar obter Filmes com os parametros - tipo: ${request.tipo}, pagina:${request.pagina}`);
        }
    }
}