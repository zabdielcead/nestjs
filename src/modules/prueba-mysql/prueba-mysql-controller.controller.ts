import { Body, Controller, Get, Post } from '@nestjs/common';
import { PruebaMysqlService } from './prueba-mysql.service';
import { CursoDto } from './dto/cursoDto';
import { ResponseDto } from './dto/responseDto';
import { TokenDto } from '../auth/dto/TokenDto';
import { UsuarioDto } from '../prueba/dto/usuarioDto';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';

@Controller('prueba-mysql-controller')
export class PruebaMysqlControllerController {


    constructor(private readonly pruebemysql:PruebaMysqlService){
    }


    @Get("/cursos")
    public async create(): Promise<CursoDto[]> {
        return await this.pruebemysql.consultaCurso();
    }


    @Get("/cursos-proc")
    public async createProc(): Promise<CursoDto[]> {
        return await this.pruebemysql.consultaCursoProc();
    }



    @Get("/cursos-proc-mult")
    public async createProcMult(): Promise<ResponseDto> {
        return await this.pruebemysql.consultaCursoProcMultiple();
    }


    @Get("/genToken")
    public async genToken(): Promise<TokenDto>{
        return await this.pruebemysql.consultaToken();
    }



    // @Post("/login")
    // public async login(@Body() data: UsuarioDto): Promise<LoginDTO>{
    //     return await this.pruebemysql.login(data);
    // }







    



}
