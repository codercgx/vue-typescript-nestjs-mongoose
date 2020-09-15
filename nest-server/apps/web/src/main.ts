import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets('uploads', {
    prefix: 'uploads',
  });
  const options = new DocumentBuilder()
    .setTitle('Nestjs Api')
    .setDescription('Nest Api 供web端调用')
    .setVersion('1.0')
    .addTag('codercgx')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(process.env.SERVER_PORT);
  console.log(`http://localhost:${process.env.SERVER_PORT}/api-doc`);
}
bootstrap();
