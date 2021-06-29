import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';
import { AuthdosService } from 'src/modules/auth-dos/authdos.service';
import { UsuarioDto } from 'src/modules/prueba/dto/usuarioDto';

@Controller('login')
export class LoginController {


    constructor(private readonly authdosService:AuthdosService){
    }

    @Post("/loginsdoss")
    public async loginDosss(@Body() data: UsuarioDto): Promise<LoginDTO>{
        return await this.authdosService.login(data.correo, data.password);
    }
}
