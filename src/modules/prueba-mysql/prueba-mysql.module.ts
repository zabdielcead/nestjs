import { Module } from '@nestjs/common';

import { PruebaMysqlControllerController } from './prueba-mysql-controller.controller';
import { PruebaMysqlService } from './prueba-mysql.service';
import { AuthService } from '../auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from '../../schema/usuario.schema';
import { AuthnestService } from '../auth/authnest.service';
import { JwtModule } from '@nestjs/jwt';
import { SECRETORPRIVATEKEY } from 'src/environments';
@Module({
  controllers: [PruebaMysqlControllerController],
  providers: [
      PruebaMysqlService,
      AuthService,
      AuthnestService
    ],
    imports: [
      MongooseModule.forFeature([
                                    { 
                                      name: Usuario.name, 
                                      schema: UsuarioSchema,
                        
                                    }
                                  ]),
                                  JwtModule.register({
                                    secret: SECRETORPRIVATEKEY,
                                    signOptions: { expiresIn: '4h' },
                                  }),
      ],

})
export class PruebaMysqlModule {}
