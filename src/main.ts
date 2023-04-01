import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // config
  const config = app.get(ConfigService);
  const host = config.getOrThrow<string>('app.host');
  const port = config.getOrThrow<number>('app.port');
  await app.listen(port, host);
}
bootstrap();
