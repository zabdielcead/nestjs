import { Expose } from "class-transformer";
import { IsDefined, IsString, IsNotEmpty } from "class-validator";

export class HeaderDTO {
    //@IsNotEmpty()
    //@IsString()
    // @IsDefined()
    // @Expose({ name: 'myheader1' })        // required as headers are case insensitive
    @IsNotEmpty()
    myHeader1: string;

    
    // @IsDefined()
    // @Expose({ name: 'myheader2' })
    @IsNotEmpty()
    myHeader2: string;

    constructor(myHeader1:string, myHeader2:string){
        this.myHeader1 = myHeader1,
        this.myHeader2 = myHeader2
    }
}