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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const car_1 = require("../../db/models/car");
const carModel_1 = require("../../db/models/carModel");
const brand_1 = require("../../db/models/brand");
const rent_1 = require("../../db/models/rent");
let CarsController = class CarsController {
    async getCarsCount() {
        return car_1.default.count();
    }
    async getCars() {
        return car_1.default.findAll({
            include: [{ model: carModel_1.default, include: [{ model: brand_1.default }] }],
        });
    }
    async getCar(id) {
        const car = JSON.parse(JSON.stringify(await car_1.default.findOne({
            where: { id },
            include: [
                { model: carModel_1.default, include: [{ model: brand_1.default }] },
                { model: rent_1.default },
            ],
        })));
        return { ...car, fullInfo: true };
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Get)('/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCarsCount", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCars", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCar", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars')
], CarsController);
//# sourceMappingURL=cars.controller.js.map