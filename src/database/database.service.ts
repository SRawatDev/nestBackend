import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private isConnected = false;

  async onModuleInit() {
    this.isConnected = true;
    console.log('Database connected');
  }

  async onApplicationShutdown(signal?: string) {
    this.isConnected = false;
    console.log('Database disconnected due to signal:', signal);
  }

  getStatus() {
    return this.isConnected ? 'user is connected' : 'user is not connected';
  }
}
