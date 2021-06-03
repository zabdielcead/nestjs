import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './modules/prueba/prueba.module';
import { URLMONGO } from './environments'

@Module({
  imports: [
              PruebaModule,
               MongooseModule.forRoot(URLMONGO)
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
