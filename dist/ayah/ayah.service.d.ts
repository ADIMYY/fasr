import { Model } from 'mongoose';
import { Ayah } from './schemas/ayah.schema';
export declare class AyahService {
    private readonly ayah;
    constructor(ayah: Model<Ayah>);
    findAyah(surah: number, ayah: number): Promise<import("mongoose").Document<unknown, {}, Ayah, {}, {}> & Ayah & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
