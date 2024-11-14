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
exports.ConsumoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ConsumoService = class ConsumoService {
    constructor(consumoModel) {
        this.consumoModel = consumoModel;
    }
    async registerConsumption(consumo) {
        const consumoModel = new this.consumoModel({
            nameUser: consumo.nameUser,
            customerCode: consumo.customerCode,
            consumption: consumo.consumption,
            consumptionDate: consumo.consumptionDate,
        });
        const result = await consumoModel.save();
        return result.id;
    }
    async getCustomerById(customerCode) {
        const infosConsumo = await this.consumoModel.find({ customerCode: customerCode }).exec();
        if (!infosConsumo) {
            throw new common_1.NotFoundException(`Customer with code ${customerCode} not found`);
        }
        console.log(customerCode);
        return infosConsumo;
    }
    async filterConsumptionDate(customerCode, initialDate, finalDate) {
        const startDate = new Date(`${initialDate}T00:00:00Z`);
        const endDate = new Date(`${finalDate}T23:59:59Z`);
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error('Datas inválidas fornecidas. Por favor, utilize o formato YYYY-MM-DD.');
        }
        try {
            const consumerSelectedDate = await this.consumoModel.find({
                customerCode: customerCode,
                consumptionDate: { $gte: startDate, $lt: endDate }
            }).exec();
            return consumerSelectedDate;
        }
        catch (error) {
            console.error('Erro ao buscar dados no intervalo de datas:', error);
            throw new Error('Erro ao buscar dados no intervalo de datas.');
        }
    }
    async readConsumo() {
        const consumo = await this.consumoModel.find().exec();
        return consumo.map(consumo => ({
            id: consumo.id,
            nameUser: consumo.nameUser,
            customerCode: consumo.customerCode,
            consumption: consumo.consumption,
            consumptionDate: consumo.consumptionDate,
        }));
    }
    async checkAlert(customerCode) {
        const now = new Date();
        const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        if (isNaN(startOfThisMonth.getTime()) || isNaN(startOfLastMonth.getTime())) {
            throw new Error('Erro ao calcular as datas. Uma ou mais datas são inválidas.');
        }
        try {
            const lastMonthConsumption = await this.consumoModel
                .findOne({
                customerCode,
                consumptionDate: { $gte: startOfLastMonth, $lt: startOfThisMonth }
            })
                .exec();
            if (!lastMonthConsumption) {
                return null;
            }
            console.log('Last Month Consumption:', lastMonthConsumption.consumption);
            const currentMonthConsumption = await this.consumoModel
                .findOne({
                customerCode,
                consumptionDate: { $gte: startOfThisMonth }
            })
                .exec();
            if (!currentMonthConsumption) {
                return null;
            }
            console.log('Current Month Consumption:', currentMonthConsumption.consumption);
            if (currentMonthConsumption.consumption > lastMonthConsumption.consumption) {
                return 'Alerta: Consumo alto! O consumo deste mês é maior que o do mês passado.';
            }
            return null;
        }
        catch (error) {
            console.error('Erro ao buscar consumos:', error);
            throw new Error('Erro ao buscar dados de consumo.');
        }
    }
    async deleteConsumer(id) {
        const result = await this.consumoModel.deleteOne({ _id: id });
    }
};
exports.ConsumoService = ConsumoService;
exports.ConsumoService = ConsumoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Consumo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConsumoService);
//# sourceMappingURL=consumo.service.js.map