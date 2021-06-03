import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
export class PruebitaDto {



    @ApiProperty({
        type: 'number',
        name: 'id',
        description: 'id of cat'
    })
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({
        type: 'string',
        name: 'name',
        description: 'name of cat'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: 'number',
        name: 'weight',
        description: 'weight of cat'
    })
    @IsNotEmpty()
    @IsNumber()
    weight: number;
    

    constructor (id: number, name: string, weight: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
    }
}
