import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';

import { PostagemModule } from './postagem/postagem.module';
import { Postagem} from './postagem/entities/postagem.entity'
import {tema} from './tema/entities/tema.entity'
import { Temamodule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';


@Module({
  imports: [
  ConfigModule.forRoot(),
TypeOrmModule.forRootAsync({  
	useClass: DevService,
    imports: [ConfigModule],
}),
    PostagemModule,
    Temamodule,
   AuthModule,
   UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
