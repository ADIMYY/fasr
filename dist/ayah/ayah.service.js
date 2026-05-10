"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AyahService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const ayah_schema_1 = require("./schemas/ayah.schema");
const mongoose_2 = require("@nestjs/mongoose");
let AyahService = class AyahService {
    constructor(ayah) {
        this.ayah = ayah;
    }
    async findAyah(surah, ayah) {
        const result = await this.ayah.findOne({
            surahNumber: surah,
            "tafsir.ayah_number": ayah
        }, {
            surahName: 1,
            surahNumber: 1,
            tafsir: { $elemMatch: { ayah_number: ayah } }
        });
        if (!result) {
            throw new common_1.NotFoundException('Ayah not found');
        }
        return result;
    }
};
exports.AyahService = AyahService;
exports.AyahService = AyahService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(ayah_schema_1.Ayah.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AyahService);
//# sourceMappingURL=ayah.service.js.map