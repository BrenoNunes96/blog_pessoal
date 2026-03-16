import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local_auth.guard';
import { AuthService } from '../services/authServices';
import { UsuarioLogin } from './../entities/usuarioLogin.entity';

@Controller("/usuarios")
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)   // indicando que é aqui onde começa a autenticação  na rota /LOGAR
    @HttpCode(HttpStatus.OK)
    @Post("/logar")
    login(@Body() usuario: UsuarioLogin): Promise<any> {
        return this.authService.login(usuario);
    }

}