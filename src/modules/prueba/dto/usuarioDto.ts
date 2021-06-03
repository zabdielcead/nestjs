import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
export class UsuarioDto {



    @ApiProperty({
        type: 'string',
        name: 'nombre',
        description: 'nombre'
    })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        type: 'boolean',
        name: 'google',
        description: 'isGoogle'
    })
    google: boolean;

    @ApiProperty({
        type: 'boolean',
        name: 'nuevoCargo',
        description: 'nuevoCargo'
    })
    nuevoCargo: boolean;



    @ApiProperty({
        type: 'string',
        name: 'correo',
        description: 'correo'
    })
    correo: string;


    @ApiProperty({
        type: 'string',
        name: 'password',
        description: 'password'
    })
    password: string;
    

    @ApiProperty({
        type: 'string',
        name: 'rol',
        description: 'rol'
    })
    rol: string;







    

    constructor (nombre: string, google: boolean, nuevoCargo: boolean,
        correo:string, password:string, rol:string) {
       this.nombre = nombre;
       this.google = google;
       this.nuevoCargo = nuevoCargo;

       this.correo = correo;
       this.password = password;
       this.rol = rol;
    }
}