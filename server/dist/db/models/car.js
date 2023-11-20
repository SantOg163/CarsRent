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
exports.Car = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
const rent_1 = require("./rent");
const carModel_1 = require("./carModel");
let Car = class Car extends sequelize_typescript_1.Model {
    static associate(models) {
        this.belongsTo(models.CarModel, { foreignKey: 'modelId' });
        this.belongsTo(models.User, { foreignKey: 'userId' });
        this.hasMany(models.Rent, { foreignKey: 'carId' });
    }
};
exports.Car = Car;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => carModel_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Car.prototype, "modelId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Car.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.default),
    __metadata("design:type", user_1.default)
], Car.prototype, "User", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rent_1.default),
    __metadata("design:type", Array)
], Car.prototype, "Rents", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => carModel_1.default),
    __metadata("design:type", carModel_1.default)
], Car.prototype, "CarModel", void 0);
exports.Car = Car = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'Car',
    })
], Car);
exports.default = Car;
//# sourceMappingURL=car.js.map