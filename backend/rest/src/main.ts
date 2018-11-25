import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("My awesome blog!")
    .setDescription("The rest API description")
    .setVersion("1.0")
    .addTag("post controller")
    .addTag("author controller")
    .addTag("comment controller")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3200);
}

bootstrap();
