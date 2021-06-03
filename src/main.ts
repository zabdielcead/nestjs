import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './config/logger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NODE_ENV, DOMAIN, PORT } from './environments'
import { Logger, ValidationPipe } from '@nestjs/common';


async function bootstrap() {

  try{
              const app = await NestFactory.create(AppModule, {
                logger: new CustomLogger(),
                cors:true
              });

			  app.useGlobalPipes(new ValidationPipe());
            
              const options = new DocumentBuilder()
            			.setTitle('Nestjs Restful Best Practice')
            			.setVersion('3.0.0')
            			// .setHost('nestjs-restful-best-practice.herokuapp.com')
            			.setBasePath('/v1')
            			.setDescription('built NestJS, TypeORM, MongoDB')
            			.setTermsOfService(
            				'https://github.com/chnirt/nestjs-restful-best-practice/blob/master/LICENSE'
            			)
            			.setLicense(
            				'MIT License',
            				'https://github.com/chnirt/nestjs-restful-best-practice/blob/master/LICENSE'
            			)
            			.setExternalDoc('For more information', 'http://swagger.io')
            			//.addBearerAuth('Authorization', 'header')
            			.addTag('chnirt', 'developer')
            			.build();
            
            		const document = SwaggerModule.createDocument(app, options);
            		SwaggerModule.setup('api', app, document);
                await app.listen(PORT);


  
    }catch(error){
      Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false)
    }
  
  
}
bootstrap();
