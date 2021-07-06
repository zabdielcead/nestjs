import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { SECRETORPRIVATEKEY } from 'src/environments';
import { Usuario, UsuarioSchema } from 'src/schema/usuario.schema';
import { AuthdosService } from './authdos.service';
import { PassportModule } from '@nestjs/passport';




@Global()
@Module({
  providers: [
    AuthdosService,
    
  ],
  imports: [
    PassportModule,
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
    AuthdosService,
  ]
})
export class AuthDosModule {}
