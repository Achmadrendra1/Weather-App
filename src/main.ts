import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Weather API')
    .setDescription('Weather & Earthquake API from Data BMKG')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 4000;
  await app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
    console.log(`Docs started on http://localhost:${port}/docs`);
  });
}
bootstrap();
