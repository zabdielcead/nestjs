import { Module } from '@nestjs/common';

import { PruebaMysqlControllerController } from './prueba-mysql-controller.controller';
import { PruebaMysqlService } from './prueba-mysql.service';
import { AuthService } from '../auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from '../../schema/usuario.schema';
@Module({
  controllers: [PruebaMysqlControllerController],
  providers: [
      PruebaMysqlService,
      AuthService
    ],
    imports: [
      MongooseModule.forFeature([
                                    { 
                                      name: Usuario.name, 
                                      schema: UsuarioSchema,
                        
                                    }
                                  ]),
      ],

})
export class PruebaMysqlModule {}
