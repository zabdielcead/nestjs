import { Injectable, CanActivate, ExecutionContext, Inject, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthdosService } from '../../modules/auth-dos/authdos.service';

@Injectable()
export class AuthGuardCustomToken implements CanActivate {
       constructor(@Inject('AuthdosService') private readonly authdosService:AuthdosService) {}


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    let resp = context.switchToHttp().getResponse();
    const header1= req.get('Authorization');

    //const user = this.authdosService.validateToken(header1);
    
    if(header1 === undefined){
      //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

      // resp
      // .status(status)
      // .json({
      //   statusCode: status,
      //   timestamp: new Date().toISOString(),
      //   path: req.url,
      // });
       return false;
    }else{
        return true;
    }

    
  }
}