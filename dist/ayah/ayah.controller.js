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
exports.AyahController = void 0;
const common_1 = require("@nestjs/common");
const ayah_service_1 = require("./ayah.service");
let AyahController = class AyahController {
    constructor(ayahService) {
        this.ayahService = ayahService;
    }
    findAyah(surah, ayah) {
        return this.ayahService.findAyah(surah, ayah);
    }
};
exports.AyahController = AyahController;
__decorate([
    (0, common_1.Get)(':surah/:ayah'),
    __param(0, (0, common_1.Param)('surah', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('ayah', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AyahController.prototype, "findAyah", null);
exports.AyahController = AyahController = __decorate([
    (0, common_1.Controller)('ayah'),
    __metadata("design:paramtypes", [ayah_service_1.AyahService])
], AyahController);
//# sourceMappingURL=ayah.controller.js.map