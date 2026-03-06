import { TypeOrmModule } from "@nestjs/typeorm";
import { tema } from "../tema/entities/tema.entity";
import { temaService } from "../tema/service/tema.service";
import { temaController } from "../tema/controller/tema.controller";
 import { Module } from "@nestjs/common";
@Module({

    imports:[TypeOrmModule.forFeature([tema])],
    providers:[temaService],
    controllers:[temaController],
    exports:[ temaService]

})
export class Temamodule{}