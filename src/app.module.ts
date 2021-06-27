import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './modules/prueba/prueba.module';
import { URLMONGO } from './environments';

import { PruebaMysqlModule } from './modules/prueba-mysql/prueba-mysql.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { 
  URLMYSQL,
PORTMYSQL,
USERMYSQL,
PASSMYSQL,
  DBNAME

} from './environments';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
              PruebaModule,
               MongooseModule.forRoot(URLMONGO),
               SequelizeModule.forRoot({
                dialect: 'mysql',
                host: URLMYSQL,
                port: PORTMYSQL,
                username: USERMYSQL,
                password: PASSMYSQL,
                database: DBNAME,
                models: [],
              }),
              PruebaMysqlModule,
              AuthModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
