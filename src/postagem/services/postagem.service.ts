import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { temaService } from "../../tema/service/tema.service";



@Injectable()


export class PostagemService{
    constructor(
    @InjectRepository(Postagem) 
    private postagemRepository:Repository<Postagem>
    , private temaService: temaService   )
    {  
        
    } // repository é classe que tem metodos de crud e esta usando a tabela postagem

async findAll(): Promise<Postagem[]>{                // promise que usa tabela postagem
    return this.postagemRepository.find({
     relations:{tema:true,usuario:true

     }

    });    // find é o metodo que esta dentro do atributo psotagemrepository  //findall é um metodo

}

async findbyid(id:number): Promise <Postagem>{
    const postagem = await this.postagemRepository.findOne({
        where:{
            id},
        relations:{
            tema:true,usuario:true}
})
if(!postagem)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    throw new HttpException("postagem nao encontrada",HttpStatus.NOT_FOUND);
    return  postagem


}
async Create (postagem : Postagem):Promise<Postagem>{
await this.temaService.findbyid(postagem.tema.id)

return this.postagemRepository.save(postagem)


}

async delete ( id:number):Promise<DeleteResult>{
            
    return this.postagemRepository.delete(id)


}


async update (Postagem:Postagem):Promise<Postagem>{

 if(!Postagem || Postagem.id <=0)
    throw new HttpException("codigo invalido",HttpStatus.BAD_REQUEST)
await this.findbyid(Postagem.id)
       await this.temaService.findbyid(Postagem.tema.id)
    return await this.postagemRepository.save(Postagem)
}


async findtitle(title:string):Promise <Postagem[]>{

const titulo = await this.postagemRepository.find({
    where:{
titulo: ILike(`%${title}%`)

},
relations:{
    tema:true,
    usuario:true
}



})
return titulo;
}




}


