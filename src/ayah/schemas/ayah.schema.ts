import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Ayah {
    @Prop({ required: true })
    surahName: string;

    @Prop({ required: true })
    surahNumber: number;

    @Prop({ required: true }) 
    tafsir: [{
        tafseer_id: number;
        tafseer_name: string;
        ayah_url: string;
        ayah_number: number;
        text: string;
    }];
};

export const AyahSchema = SchemaFactory.createForClass(Ayah);