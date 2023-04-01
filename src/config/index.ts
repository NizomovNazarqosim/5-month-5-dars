import { ConfigModuleOptions } from '@nestjs/config';
import { databaseConfig } from './database/index';
import { appConfig } from './app/index';

export const config: ConfigModuleOptions = {
  load: [appConfig, databaseConfig],
  cache: true,
  isGlobal: true,
};
