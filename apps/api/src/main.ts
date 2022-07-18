/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import 'tslib';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3333;
    await app.listen(port);
    Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
}

const uncaughtSignal = (code, reason) => (signal) => {
    console.trace()
    // console.log(msg);
    console.log(reason);
// will kill the server
}
process.on('SIGTERM', uncaughtSignal(0, 'SIGTERM'));
process.on('SIGINT', uncaughtSignal(0, 'SIGINT'));
process.on('SIGFPE',uncaughtSignal(0, 'SIGINT'));
process.on('exit',uncaughtSignal(100, 'exit'));




bootstrap();
