import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {cors: {origin: 'http://localhost:5173',credentials:true}});

    const config = new DocumentBuilder()
      .setTitle('REST API')
      .setDescription('REST API book of contacts')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(4000);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
