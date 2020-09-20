export interface AddProductModel {
    organizationId: string;
    name: string;
    description?: string;
    prices: PricesModel[];
}

export interface PricesModel {
    unitPrice: number;
    currencyId: string;
}
