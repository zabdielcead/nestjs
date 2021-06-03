import { CallHandler, ExecutionContext, ForbiddenException, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class InterceptorHeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const ctx = context.switchToHttp();
    const req:Request = ctx.getRequest<Request>();

    const header1= req.get('myHeader1');
    const header2= req.get('myHeader2');
    console.log('header1',header1);
    console.log('header2',header2);
     if(header1=== '' || header2 === '' || header1=== undefined || header2 === undefined){
      throw new ForbiddenException('errrrroororororor');
    }

    return next.handle();
  }
}
