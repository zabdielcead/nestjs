import { Module } from '@nestjs/common';

import { PruebaMysqlControllerController } from './prueba-mysql-controller.controller';
import { PruebaMysqlService } from './prueba-mysql.service';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [PruebaMysqlControllerController],
  providers: [
      PruebaMysqlService,
      AuthService
    ]
})
export class PruebaMysqlModule {}
