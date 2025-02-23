import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WritersModule } from './writers/writers.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './Prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    WritersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
