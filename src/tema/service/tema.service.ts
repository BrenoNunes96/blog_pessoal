
import { ILike, Repository } from "typeorm";
import {tema} from "../entities/tema.entity"
import { InjectRepository } from "@nestjs/typeorm";
import {HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

export class temaService{
constructor(
@InjectRepository(tema) 
private tema:Repository<tema> ){}

public async findall ():Promise<tema[]>{     //lista todos os temas 

     return await this.tema.find()

}

public async findbyid (id:number):Promise<tema>{         // lista os temas por id
       
    const idTema = await this.tema.findOne({where:{id}})

if(!idTema){
 throw new HttpException("tema nao encontrado",HttpStatus.NOT_FOUND)
}
return idTema;
} 


public async findAllByDescricao(descricao:string):Promise<tema[]>{     // lista temas que tenham a descrição
const descricao2 = await this.tema.find({where:{
    descricao:ILike(`%${descricao}%`)
}
})

return descricao2
    
    
}

public async create(temas:tema):Promise<tema>{

return this.tema.save(temas)             // cria o tema

}

public async update(temas:tema):Promise<tema>{      // atualiza o tema de acorod com o id

    if(!temas.id ||temas.id <=0)
     throw new HttpException('id invalido',HttpStatus.BAD_REQUEST)

     await this.findbyid(temas.id)
    
    return this.tema.save(temas)


}

public async delete(id:number):Promise<DeleteResult>{

return  await  this.tema.delete(id)

}


}