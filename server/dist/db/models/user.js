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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const car_1 = require("./car");
const rent_1 = require("./rent");
let User = class User extends sequelize_typescript_1.Model {
    static associate(models) {
        this.hasMany(models.Rent, { foreignKey: 'userId' });
        this.hasMany(models.Car, { foreignKey: 'userId' });
    }
};
exports.User = User;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => car_1.default),
    __metadata("design:type", Array)
], User.prototype, "Cars", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rent_1.default),
    __metadata("design:type", Array)
], User.prototype, "Rents", void 0);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'User',
    })
], User);
exports.default = User;
//# sourceMappingURL=user.js.map