import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostagemModule } from './postagem/postagem.module';
import { Postagem } from './postagem/entities/postagem.entity'
import {tema} from './tema/entities/tema.entity'
import { Temamodule } from './postagem/tema.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogPessoal',
      entities: [Postagem,tema],
      synchronize: true,
      
      
    }),
    PostagemModule,
    Temamodule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
