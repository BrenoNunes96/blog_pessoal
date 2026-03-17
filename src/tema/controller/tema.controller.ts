import { Controller, Get, HttpCode, HttpStatus, Post, Put, Delete, Param, ParseIntPipe, Body, UseGuards} from "@nestjs/common";
import { temaService } from "../service/tema.service";
import {tema} from"../entities/tema.entity"
import { DeleteResult } from "typeorm";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../../auth/guard/local_auth.guard";

@ApiTags('Tema')
@UseGuards(LocalAuthGuard)
@Controller("/temas")
@ApiBearerAuth()
export class temaController{

constructor(private readonly temaService: temaService){}

@Get()
@HttpCode(HttpStatus.OK)
findall():Promise<tema[]>{
 return this.temaService.findall();

}

@Get("/:id")
@HttpCode(HttpStatus.OK)
findbyid(@Param ("id",ParseIntPipe) id:number ):Promise<tema>{
return this.temaService.findbyid(id)

}

@Get("/descricao/:descricao")
@HttpCode(HttpStatus.OK)
findallbydescricao(@Param("descricao") descricao:string):Promise<tema[]>{
return this.temaService.findAllByDescricao(descricao)
}


@Post("/criar")
@HttpCode(HttpStatus.CREATED)
create(@Body() temas:tema):Promise<tema>{
return this.temaService.create(temas)
}

@Put("/atualizar")
@HttpCode(HttpStatus.OK)
update(@Body() temas:tema):Promise<tema>{
return this.temaService.update(temas)

}

@Delete("/deletar/:id")
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param("id") id:number):Promise<DeleteResult>{
    return this.temaService.delete(id)
}



}