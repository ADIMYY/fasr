import { Module } from '@nestjs/common';
import { AyahService } from './ayah.service';
import { AyahController } from './ayah.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ayah, AyahSchema } from './schemas/ayah.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ayah.name, schema: AyahSchema }]),
  ],
  providers: [AyahService],
  controllers: [AyahController]
})
export class AyahModule {}
