/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("breno nunes","","brenocp3@live.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const document = SwaggerModule.createDocument(app, config);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  SwaggerModule.setup('/swagger', app, document);
    process.env.TZ  ='-03:00';  
   app.useGlobalPipes(new ValidationPipe());
   app.enableCors();


  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
