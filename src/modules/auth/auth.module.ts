import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { Usuario, UsuarioSchema } from '../../schema/usuario.schema';
@Module({
  providers: [
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
export class AuthModule {

}
