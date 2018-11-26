import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AUTHOR_CONTROLLER, COMMENT_CONTROLLER, POST_CONTROLLER } from './config/api-tags';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("My awesome blog!")
    .setDescription("The rest API description")
    .setVersion("1.0")
    .addTag(POST_CONTROLLER)
    .addTag(AUTHOR_CONTROLLER)
    .addTag(COMMENT_CONTROLLER)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3200);
}

bootstrap();
