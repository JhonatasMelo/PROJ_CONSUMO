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
exports.ConsumoController = void 0;
const common_1 = require("@nestjs/common");
const consumo_service_1 = require("./consumo.service");
let ConsumoController = class ConsumoController {
    constructor(consumoService) {
        this.consumoService = consumoService;
    }
    async deleteConsumer(id) {
        await this.consumoService.deleteConsumer(id);
        return null;
    }
    readAllConsumos() {
        return this.consumoService.readConsumo();
    }
    getCustomerById(customerCode) {
        return this.consumoService.getCustomerById(customerCode);
    }
    filterConsumptionDate(customerCode, initialDate, finalDate) {
        return this.consumoService.filterConsumptionDate(customerCode, initialDate, finalDate);
    }
    async checkAlert(customerCode) {
        return this.consumoService.checkAlert(customerCode);
    }
    async createConsumo(consumo) {
        let response = await this.consumoService.registerConsumption(consumo);
        return { id: response };
    }
};
exports.ConsumoController = ConsumoController;
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "deleteConsumer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "readAllConsumos", null);
__decorate([
    (0, common_1.Get)(':customerCode'),
    __param(0, (0, common_1.Param)('customerCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Get)('/data/:customerCode/:initialDate/:finalDate'),
    __param(0, (0, common_1.Param)('customerCode')),
    __param(1, (0, common_1.Param)('initialDate')),
    __param(2, (0, common_1.Param)('finalDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "filterConsumptionDate", null);
__decorate([
    (0, common_1.Get)('alert/:userId'),
    __param(0, (0, common_1.Param)('customerCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "checkAlert", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "createConsumo", null);
exports.ConsumoController = ConsumoController = __decorate([
    (0, common_1.Controller)('consumo'),
    __metadata("design:paramtypes", [consumo_service_1.ConsumoService])
], ConsumoController);
//# sourceMappingURL=consumo.controller.js.map