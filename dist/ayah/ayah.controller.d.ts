import { AyahService } from './ayah.service';
export declare class AyahController {
    private ayahService;
    constructor(ayahService: AyahService);
    findAyah(surah: number, ayah: number): Promise<import("mongoose").Document<unknown, {}, import("./schemas/ayah.schema").Ayah, {}, {}> & import("./schemas/ayah.schema").Ayah & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
