import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AyahModule } from './ayah/ayah.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://abdoadimy_db_user:80iIBLbBrolONMI5@tafseer.4d2np6v.mongodb.net/',
    ),
    AyahModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
