import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";

@Injectable()

export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
    private postagemRepository:Repository<Postagem>   // repository é classe que tem metodos de crud e esta usando a tabela postagem

) {}
async findAll(): Promise<Postagem[]>{                // promise que usa tabela postagem
    return this.postagemRepository.find();    // find é o metodo que esta dentro do atributo psotagemrepository 
 
}


}