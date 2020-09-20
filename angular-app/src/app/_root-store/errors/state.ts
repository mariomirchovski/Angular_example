import { ErrorTypeEnum } from 'src/app/enums/error.enum';

export interface ErrorState {
    type: ErrorTypeEnum;
    message: string;
}

export const InitialState: ErrorState = {
    type: null,
    message: ''
};
