import * as mongoose from 'mongoose';
export declare const ConsumoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    consumptionDate: NativeDate;
    nameUser?: string;
    customerCode?: number;
    consumption?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    consumptionDate: NativeDate;
    nameUser?: string;
    customerCode?: number;
    consumption?: number;
}>> & mongoose.FlatRecord<{
    consumptionDate: NativeDate;
    nameUser?: string;
    customerCode?: number;
    consumption?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface Consumo extends mongoose.Document {
    id: number;
    nameUser: string;
    customerCode: number;
    consumption: number;
    consumptionDate: Date;
}
