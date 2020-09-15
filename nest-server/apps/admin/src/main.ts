import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('uploads',{
    prefix: '/uploads'
  })
  app.enableCors()
  const options = new DocumentBuilder()
  .setTitle('Nestjs Api')
  .setDescription('Nest Api 供web端调用')
  .setVersion('1.0')
  .addTag('codercgx')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
