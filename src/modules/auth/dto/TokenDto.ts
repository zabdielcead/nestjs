import { ApiProperty } from "@nestjs/swagger";
export class TokenDto {



    @ApiProperty({
        type: 'string',
        name: 'token',
        description: 'token'
    })
    token: string;

    constructor (token: string) {
        this.token = token; 
     }
}