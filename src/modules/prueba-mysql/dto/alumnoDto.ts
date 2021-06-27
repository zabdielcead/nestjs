import { ApiProperty } from "@nestjs/swagger";
export class AlumnoDto {



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
    apellido: string;

    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    create_at: string;


    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    email: string;



    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    nombre: string;



    







    

    constructor (id: number, apellido: string, create_at: string, email: string, nombre:string) {
       this.nombre = nombre;
       this.create_at = create_at;
       this.id = id;
       this.apellido = apellido;
       this.email = email;

      
    }
}