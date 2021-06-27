import { ApiProperty } from "@nestjs/swagger";
import { AlumnoDto } from "./alumnoDto";
import { CursoDto } from "./cursoDto";
export class ResponseDto {



    @ApiProperty({
        type: 'record',
        name: 'listCurso',
        description: 'listCurso'
    })
    listCurso: Array<CursoDto>;

    @ApiProperty({
        type: 'record',
        name: 'listAlumno',
        description: 'listAlumno'
    })
    listAlumno: Array<AlumnoDto>;

    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    result: string;



    







    

    constructor (listCurso: Array<CursoDto>, listAlumno: Array<AlumnoDto>, result:string) {
       this.listCurso = listCurso;
       this.listAlumno = listAlumno;
       this.result = result;
    }
}