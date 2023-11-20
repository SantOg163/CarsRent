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
exports.Rent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const car_1 = require("./car");
const user_1 = require("./user");
let Rent = class Rent extends sequelize_typescript_1.Model {
    static associate(models) {
        this.belongsTo(models.Car, { foreignKey: 'carId' });
        this.belongsTo(models.User, { foreignKey: 'userId' });
    }
};
exports.Rent = Rent;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => car_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Rent.prototype, "carId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Rent.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => car_1.default),
    __metadata("design:type", car_1.default)
], Rent.prototype, "Car", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.default),
    __metadata("design:type", user_1.default)
], Rent.prototype, "User", void 0);
exports.Rent = Rent = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'Rent',
    })
], Rent);
exports.default = Rent;
//# sourceMappingURL=rent.js.map