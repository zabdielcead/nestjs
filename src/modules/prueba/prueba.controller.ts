import { Body, Controller,Get, Post, UseFilters, UseInterceptors, UsePipes } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger'
import { PruebitaDto } from './dto/pruebaDto';
import { PruebaService } from './prueba.service';
import { ForbiddenException } from '../../common/exception/forbiddenException';
import { HttpExceptionFilter } from 'src/common/exception/httpExceptionFilter';
import { CustomPipe } from 'src/common/pipes/custom.pipe';
import { HeaderDTO } from '../../common/dtoUtil/headerDto';
import { RequestHeader } from 'src/common/decorator/request-header';
import { InterceptorHeaderInterceptor } from 'src/common/interceptor/interceptor-header.interceptor';
import { UsuarioDto } from './dto/usuarioDto';
import { Usuario } from 'src/schema/usuario.schema';
// import { UsuarioDto } from './dto/usuarioDto';
// import { UsuarioDocument } from 'src/schema/usuario.schema';
// import { Usuario } from '../../schema/usuario.schema';


@Controller('prueba')
export class PruebaController {

    constructor(private readonly pruebaService:PruebaService){
    }

    // @ApiResponse({
	// 	status: 200,
	// 	description: 'The found records',
	// 	type: [StudentEntity]
	// })
	// @ApiOperation({
	// 	title: 'Retrieve many Students 👾'
	// })
    // @Get()
	// findAll() {
	// 	return this.studentsService.findAll()
	// }


    @Post("/pruebilla")
    public async create(@Body() data: PruebitaDto): Promise<PruebitaDto> {
        return this.pruebaService.add(data);
    }

	@Get("/pruebError")
	@UseFilters(new HttpExceptionFilter())
    public async createGet(): Promise<PruebitaDto> {
        throw new ForbiddenException('errrrroororororor');
    }

	@UsePipes(new CustomPipe())
	@Post("/pruebErrorpost")
    public async createPost(@Body() data: PruebitaDto): Promise<PruebitaDto> {
        return this.pruebaService.add(data);
    }


	@Get("/pruebHello")
    public async createGetError(@RequestHeader() headers:HeaderDTO ): Promise<HeaderDTO> {
        console.log('headers',headers);
		return headers;
    }


    @Post("/pruebInterceptor")
    @UseInterceptors(new InterceptorHeaderInterceptor())
    public async createGetInterceptor( @Body() data: PruebitaDto ): Promise<PruebitaDto> {
       
        return this.pruebaService.add(data);
    }



    @Post("/saveUser")
    @UseInterceptors(new InterceptorHeaderInterceptor())
    public async createUser( @Body() data: UsuarioDto ): Promise<Usuario> {
       
        return this.pruebaService.createUser(data);
    }
}
