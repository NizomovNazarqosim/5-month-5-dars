import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { PostModule } from './module/post/post.module';
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    PrismaModule,
    PostModule,
    CategoryModule,
  ],
})
export class AppModule {}
