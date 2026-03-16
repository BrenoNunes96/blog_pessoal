import { Postagem } from './../entities/postagem.entity';
import { PostagemService } from './../services/postagem.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

    @Controller("/postagens") // endpoint da requisição via fetch ou axius api
    export class PostagemController{

     constructor(private readonly postagemService:PostagemService){}
     @Get()                      // buscar todas as postagens
     @HttpCode(HttpStatus.OK)
     findAll ():Promise<Postagem[]>{
        return this.postagemService.findAll();
     }

    @Get("/:id")        // buscar postagem por id
    @HttpCode(HttpStatus.OK)
    findbyid(@Param('id', ParseIntPipe) id: number):Promise<Postagem>{
       return  this.postagemService.findbyid(id);
    }


@Post('/postar')         // criar post
@HttpCode(HttpStatus.CREATED)
Create(@Body() postar:Postagem ):Promise<Postagem>{
return this.postagemService.Create(postar)

}

@Put('/atualizar')       // atualizar
@HttpCode(HttpStatus.OK)
Update(@Body() postagem:Postagem ):Promise<Postagem>{

return this.postagemService.update(postagem)
}


    @Get('/titulo/:titulo')    // busca por titulo
    @HttpCode(HttpStatus.OK)
    findTitle(@Param('titulo') titulo:string):Promise<Postagem[]>{
    return this.postagemService.findtitle(titulo)

    }
                         


@Delete("/deletar/:id")
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param ('id',ParseIntPipe) id:number){
return this.postagemService.delete(id)

}

    
   }