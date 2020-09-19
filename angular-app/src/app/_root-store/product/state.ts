export interface ProductState {
    items: string[];
    loading: boolean;
    error: any;
}

export const InitialState: ProductState = {
    items: [],
    loading: false,
    error: null
};
