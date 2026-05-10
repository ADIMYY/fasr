import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Ayah } from './schemas/ayah.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AyahService {
    constructor(
        @InjectModel(Ayah.name)
        private readonly ayah: Model<Ayah>,
    ) {}

    async findAyah(surah: number, ayah: number) {
        const result = await this.ayah.findOne(
            { 
                surahNumber: surah,
                "tafsir.ayah_number": ayah
            },
            {
                surahName: 1,
                surahNumber: 1,
                tafsir: { $elemMatch: { ayah_number: ayah } }
            }
        );

        if (!result) {
            throw new NotFoundException('Ayah not found');
        }

        return result;
    }
}