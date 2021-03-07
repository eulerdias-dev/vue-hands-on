import { Inject } from "typescript-ioc";
import FilmeRequest from "../models/request/filmeRequest";
import FilmeResult from "../models/result/filmeResult";
import FilmeRepository from "../repositories/filmeRepository";

export default class FilmeService {
    @Inject
    private filmeRepository!: FilmeRepository;

    public async obterPor(request: FilmeRequest): Promise<FilmeResult> {
        return await this.filmeRepository.obterPor(request);
    }
}