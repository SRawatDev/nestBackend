import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpException } from '@nestjs/common';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx=host.switchToHttp();
    const response=ctx.getResponse<Response>();
    const request=ctx.getRequest<Request>();
    const statusCode=exception.getStatus();
    response.status(statusCode).json({
      statusCode:statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:exception.message || null
    });
  }
}
