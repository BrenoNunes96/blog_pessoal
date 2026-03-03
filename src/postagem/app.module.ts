import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostagemModule } from './postagem.module';
import { Postagem } from './entities/postagem.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogPessoal',
      entities: [Postagem],
      synchronize: false,
      logging:true
      
    }),
    PostagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
