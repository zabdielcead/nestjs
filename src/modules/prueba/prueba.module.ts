import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PruebaController } from './prueba.controller';
import { PruebaService } from './prueba.service';
import { HeaderMiddleware } from '../../common/headerValid.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/schema/usuario.schema';

@Module({
  controllers: [PruebaController],
  providers: [PruebaService],
  imports: [
            MongooseModule.forFeature([
                                          { 
                                            name: Usuario.name, 
                                            schema: UsuarioSchema,
                              
                                          }
                                        ]),
        ],

        
})
export class PruebaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HeaderMiddleware)
      .forRoutes('prueba/pruebilla');
  }
}
