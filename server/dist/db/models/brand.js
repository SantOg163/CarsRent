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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const carModel_1 = require("./carModel");
let Brand = class Brand extends sequelize_typescript_1.Model {
    static associate(models) {
        this.hasMany(models.CarModel, { foreignKey: 'brandId' });
    }
};
exports.Brand = Brand;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => carModel_1.default),
    __metadata("design:type", Array)
], Brand.prototype, "CarModels", void 0);
exports.Brand = Brand = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'Brand',
    })
], Brand);
exports.default = Brand;
//# sourceMappingURL=brand.js.map