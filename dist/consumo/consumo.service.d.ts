import { Consumo } from "./consumo.model";
import { Model } from "mongoose";
export declare class ConsumoService {
    private readonly consumoModel;
    constructor(consumoModel: Model<Consumo>);
    registerConsumption(consumo: Consumo): Promise<string>;
    getCustomerById(customerCode: number): Promise<(import("mongoose").Document<unknown, {}, Consumo> & Consumo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    filterConsumptionDate(customerCode: number, initialDate: String, finalDate: String): Promise<(import("mongoose").Document<unknown, {}, Consumo> & Consumo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    readConsumo(): Promise<{
        id: any;
        nameUser: string;
        customerCode: number;
        consumption: number;
        consumptionDate: Date;
    }[]>;
    checkAlert(customerCode: number): Promise<string>;
    deleteConsumer(id: number): Promise<void>;
}
