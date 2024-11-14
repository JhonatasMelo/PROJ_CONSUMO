import { Consumo } from './consumo.model';
import { ConsumoService } from "./consumo.service";
export declare class ConsumoController {
    private readonly consumoService;
    constructor(consumoService: ConsumoService);
    deleteConsumer(id: number): Promise<any>;
    readAllConsumos(): Promise<any>;
    getCustomerById(customerCode: number): Promise<any>;
    filterConsumptionDate(customerCode: number, initialDate: String, finalDate: String): Promise<any>;
    checkAlert(customerCode: number): Promise<string>;
    createConsumo(consumo: Consumo): Promise<any>;
}
