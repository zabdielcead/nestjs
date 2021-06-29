import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { Usuario, UsuarioSchema } from '../../schema/usuario.schema';
import { AuthnestService } from './authnest.service';
import { SECRETORPRIVATEKEY } from 'src/environments';
import { JwtModule } from '@nestjs/jwt';
@Module({
  providers: [
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
    exports:[
      JwtModule,
      AuthService,
      AuthnestService
    ]
})
export class AuthModule {

}
