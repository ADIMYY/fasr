export declare class Ayah {
    surahName: string;
    surahNumber: number;
    tafsir: [
        {
            tafseer_id: number;
            tafseer_name: string;
            ayah_url: string;
            ayah_number: number;
            text: string;
        }
    ];
}
export declare const AyahSchema: import("mongoose").Schema<Ayah, import("mongoose").Model<Ayah, any, any, any, import("mongoose").Document<unknown, any, Ayah, any, {}> & Ayah & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ayah, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Ayah>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Ayah> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
