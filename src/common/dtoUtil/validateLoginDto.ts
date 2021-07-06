import { Expose } from "class-transformer";
import { IsDefined, IsString, IsNotEmpty } from "class-validator";
import { Usuario } from "src/schema/usuario.schema";

export class ValidateLoginDto {
    //@IsNotEmpty()
    //@IsString()
    // @IsDefined()
    // @Expose({ name: 'myheader1' })        // required as headers are case insensitive
     @IsNotEmpty()
     status: string;
    



    
    // // @IsDefined()
    // // @Expose({ name: 'myheader2' })
    @IsNotEmpty()
    msg: string;


    userAuth:Usuario;


   







    constructor(status:string, msg:string, userAuth: Usuario){
        this.status = status;
        this.msg = msg;
        this.userAuth = userAuth;
       
    }
}