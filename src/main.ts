import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        if (errors.length === 0) {
          return new BadRequestException({
            statusCode: 400,
            message: 'Validation failed',
            error: 'Bad Request',
          });
        }
        const messages = errors.flatMap((err) =>
          err.constraints ? Object.values(err.constraints) : [],
        );
        const firstError = messages[0] || 'Validation error';
        return new BadRequestException({
          statusCode: 400,
          message: firstError, 
          error: 'Bad Request',
        });
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  app.enableShutdownHooks()
}
bootstrap();
