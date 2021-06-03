import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { stringify } from 'querystring';
import { HeaderDTO } from '../dtoUtil/headerDto';




export const RequestHeader = createParamDecorator(
  async (value:  ClassConstructor<HeaderDTO>, ctx: ExecutionContext) => {
    

    // extract headers
    const headers = ctx.switchToHttp().getRequest().headers;
    console.log('headerss', headers);
    console.log('valuess', value);

    
    // Convert headers to DTO object
    //const dto:HeaderDTO = plainToClass(value, headers, { excludeExtraneousValues: true });
    let dto:HeaderDTO = plainToClass(value, headers, { excludeExtraneousValues: true });
    //const dto = plainToClass(value, headers);
    
    
    // Validate 
     await validateOrReject(dto);

    // return header dto object 
    



    return dto;
  },
);