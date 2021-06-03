import { ArgumentMetadata, Injectable, PipeTransform, ValidationPipe } from '@nestjs/common';


@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('auth', value);
    // if(this.isEmpty(value.headers.authorization) || value.headers.authorization === undefined){
    //   throw new ForbiddenException(`Validation fail`);
    // }
    return value;
  }

  private isEmpty(value:any){
    if(Object.keys(value).length < 1){
      return true;
    }
    return false;
  }
}
