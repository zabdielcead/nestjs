import { Body, Controller, Post, Headers, UseGuards, UseFilters, UseInterceptors} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';
import { ValidateLoginDto } from 'src/common/dtoUtil/validateLoginDto';
import { HttpExceptionFilter } from 'src/common/exception/httpExceptionFilter';
import { InterceptorHeaderInterceptor } from 'src/common/interceptor/interceptor-header.interceptor';
import { AuthdosService } from 'src/modules/auth-dos/authdos.service';
import { UsuarioDto } from 'src/modules/prueba/dto/usuarioDto';
import { AuthGuardCustomToken } from '../../../common/guards/auth.guard';






@Controller('login')
export class LoginController {


    constructor(private readonly authdosService:AuthdosService){
    }

    @Post("/loginsdoss")
    public async loginDosss(@Body() data: UsuarioDto): Promise<LoginDTO>{
        return await this.authdosService.login(data.correo, data.password);
    }


    @Post("/validToken")
    public async validtoken(@Body() data: UsuarioDto, @Headers('Authorization') token:string ): Promise<ValidateLoginDto>{
        //return `token:::::.::.:::.:::${token}`;

        return await this.authdosService.validateToken(token);

    }
    
    
    @UseGuards(AuthGuardCustomToken)
    @UseFilters(new HttpExceptionFilter())
    @Post("/gettokenvalida")
    public async validstring(@Body() data: UsuarioDto ): Promise<string>{
        //return `token:::::.::.:::.:::${token}`;
        return 'hpalakala';

        //return await this.authdosService.validateToken(token);

    }






}
