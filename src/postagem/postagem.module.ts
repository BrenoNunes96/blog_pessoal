    import { Module } from "@nestjs/common";
    import { TypeOrmModule } from "@nestjs/typeorm";
    import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";
import { tema } from "../tema/entities/tema.entity";

    @Module({
imports:[TypeOrmModule.forFeature([Postagem]),tema],
providers:[PostagemService],
controllers:[PostagemController],
exports :[],



    })
export class PostagemModule{}