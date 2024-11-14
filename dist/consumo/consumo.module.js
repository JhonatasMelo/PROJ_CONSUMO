"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoModule = void 0;
const common_1 = require("@nestjs/common");
const consumo_controller_1 = require("./consumo.controller");
const consumo_service_1 = require("./consumo.service");
const mongoose_1 = require("@nestjs/mongoose");
const consumo_model_1 = require("./consumo.model");
let ConsumoModule = class ConsumoModule {
};
exports.ConsumoModule = ConsumoModule;
exports.ConsumoModule = ConsumoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Consumo', schema: consumo_model_1.ConsumoSchema }])],
        controllers: [consumo_controller_1.ConsumoController],
        providers: [consumo_service_1.ConsumoService]
    })
], ConsumoModule);
//# sourceMappingURL=consumo.module.js.map