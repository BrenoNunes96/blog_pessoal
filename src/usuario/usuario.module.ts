import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';


import { AuthModule } from '../auth/auth.module';
import { UsuarioController } from './controllers/usuarioController';
import { UsuarioService } from './services/UsuarioService';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    forwardRef(() =>AuthModule )
  ], 
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}