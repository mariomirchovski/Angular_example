export interface AddProductModel {
    name: string;
    description?: string;
    prices: PricesModel[];
}

export interface PricesModel {
    unitPrice: number;
    currencyId: string;
}
