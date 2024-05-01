import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './middleware/exceptions/exceptionFilter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default async () => {
    const app = await NestFactory.create(AppModule, { cors: true })
    const configService = app.get(ConfigService)

    const port = configService.get<number>('port')
    const prefix = configService.get<string>('dbBasePrefix')
    const dbUrl = configService.get<string>('dbUrl')
    console.log(dbUrl)

    app.setGlobalPrefix(prefix)
    app.useGlobalFilters(new HttpExceptionFilter());

    const config = new DocumentBuilder()
    .setTitle('E-commerce Forniture API')
    .setDescription('E-commerce Forniture API documentation')
    .setVersion('1.0')
    .addTag('')
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(port)
}