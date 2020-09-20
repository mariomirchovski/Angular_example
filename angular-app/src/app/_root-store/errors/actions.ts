import { Action } from '@ngrx/store';
import { ErrorState } from './state';

export enum ErrorType {
    ERROR_ACTION = '[Error] Save error type & message to store',
}

export class ErrorAction implements Action {
    readonly type = ErrorType.ERROR_ACTION;

    constructor(public payload: ErrorState) { }
}

export type ErrorActions = ErrorAction;
