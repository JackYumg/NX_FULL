
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IDInput {
    id?: string;
}

export interface UserInput {
    id?: string;
    name?: string;
}

export interface IQuery {
    getApplications(): Application[] | Promise<Application[]>;
    findUserById(id: string): User | Promise<User>;
}

export interface Application {
    id: string;
    appName?: string;
    icon?: string;
}

export interface IMutation {
    insertUser(user?: UserInput): User | Promise<User>;
}

export interface User {
    id: string;
    name?: string;
}
