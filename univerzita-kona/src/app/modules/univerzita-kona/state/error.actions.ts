import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
    throwErrorType = '[Error] throw temp error',
}

export class ThrowTempAction implements Action {
    readonly type = ErrorActionTypes.throwErrorType;

    constructor() {}
}

export type ErrorActions = ThrowTempAction;
