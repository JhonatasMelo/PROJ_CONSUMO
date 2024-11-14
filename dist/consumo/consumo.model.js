"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoSchema = void 0;
const mongoose = require("mongoose");
exports.ConsumoSchema = new mongoose.Schema({
    nameUser: { type: String, require: true },
    customerCode: { type: Number, require: true },
    consumption: { type: Number, require: true },
    consumptionDate: { type: Date, default: Date.now, require: true }
});
//# sourceMappingURL=consumo.model.js.map