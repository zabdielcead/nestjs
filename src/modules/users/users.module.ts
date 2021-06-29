import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthDosModule } from '../auth-dos/auth-dos.module';

@Module({
  controllers: [
                  LoginController
                ],
             
})
export class UsersModule {}
