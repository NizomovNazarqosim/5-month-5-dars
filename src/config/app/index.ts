import { registerAs } from '@nestjs/config';

interface IAppConfig {
  readonly host?: string;
  readonly port?: number;
}

export const appConfig = registerAs(
  'app',
  (): IAppConfig => ({
    host: String(process.env.APP_HOST) ?? 'localhost',
    port: Number(process.env.APP_PORT) ?? 3000,
  }),
);
