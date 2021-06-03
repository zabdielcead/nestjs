import { ForbiddenException, HttpService, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {

 
   
  use(req: Request, res: Response, next: NextFunction) {
   
    // req.headers = {
    //   ...req.headers,
    //   Authorization: req.headers.Authorization || 'AUTH',
    // };

  //  const {myHeader1, myHeader2} = req.headers;
    //console.log('1',req.get('myHeader1'));
    //console.log('2',myHeader2);

    console.log('request',req.body.name);
    
    const header1= req.get('myHeader1');
    const header2= req.get('myHeader2');
     if(header1=== '' || header2 === ''){
      throw new ForbiddenException('errrrroororororor');
    }

    // console.log('1',req.headers);
    // console.log('2',req.headers.myHeader2)
    // if(req.headers.myHeader1 === undefined || req.headers.myHeader2 === undefined){
    //   throw new ForbiddenException('errrrroororororor');
    // }
   
      console.log('Request headers',req.headers);
      res.header('HOLA','2');
      next();
  }
}
