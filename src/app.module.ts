import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';

import { PostagemModule } from './postagem/postagem.module';
import { Postagem } from './postagem/entities/postagem.entity'
import {tema} from './tema/entities/tema.entity'
import { Temamodule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogPessoal',
      entities: [Postagem,tema,Usuario],
      synchronize:false,
      
      
    }),
    PostagemModule,
    Temamodule,
   AuthModule,
   UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
