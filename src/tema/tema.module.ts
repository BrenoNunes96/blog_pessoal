import { TypeOrmModule } from "@nestjs/typeorm";
import { tema } from "./entities/tema.entity";
import { temaService } from "./service/tema.service";
import { temaController } from "./controller/tema.controller";
 import { Module } from "@nestjs/common";
@Module({

    imports:[TypeOrmModule.forFeature([tema])],
    providers:[temaService],
    controllers:[temaController],
    exports:[ temaService]

})
export class Temamodule{}