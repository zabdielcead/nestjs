import { ApiProperty } from "@nestjs/swagger";
export class CursoDto {



    @ApiProperty({
        type: 'number',
        name: 'id',
        description: 'id'
    })
    id: number;

    @ApiProperty({
        type: 'string',
        name: 'createAt',
        description: 'fecha'
    })
    create_at: string;

    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    nombre: string;



    







    

    constructor (id: number, create_at: string, nombre: string) {
       this.nombre = nombre;
       this.create_at = create_at;
       this.id = id;

      
    }
}