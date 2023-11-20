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
exports.CarModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const brand_1 = require("./brand");
const car_1 = require("./car");
let CarModel = class CarModel extends sequelize_typescript_1.Model {
    static associate(models) {
        this.belongsTo(models.Brand, { foreignKey: 'brandId' });
        this.hasMany(models.Car, { foreignKey: 'modelId' });
    }
};
exports.CarModel = CarModel;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => brand_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CarModel.prototype, "brandId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], CarModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => brand_1.default),
    __metadata("design:type", brand_1.default)
], CarModel.prototype, "Brand", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => car_1.default),
    __metadata("design:type", Array)
], CarModel.prototype, "Cars", void 0);
exports.CarModel = CarModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'CarModel',
    })
], CarModel);
exports.default = CarModel;
//# sourceMappingURL=carModel.js.map