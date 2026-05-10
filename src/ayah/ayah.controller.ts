import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AyahService } from './ayah.service';

@Controller('ayah')
export class AyahController {
    constructor(private ayahService: AyahService) {}

    @Get(':surah/:ayah')
    findAyah(
        @Param('surah', ParseIntPipe) surah: number, 
        @Param('ayah', ParseIntPipe) ayah: number
    ) {
        return this.ayahService.findAyah(surah, ayah);
    }
}