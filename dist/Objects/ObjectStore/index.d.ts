import { IMakeableObject } from "./ObjectFactory";
import { IStore, IGetRequest, IDeleteRequest, ICheckIfExistsRequest, IGetAllRequest, IUpdateRequest } from "./Interfaces";
import { Position } from "../../Shared/Interfaces";
export default class ObjectStore {
    constructor();
    static storageCount: number;
    private static storage;
    private static register;
    static store(object: IMakeableObject): void;
    static get({ uuid, objectType }: IGetRequest): IMakeableObject;
    static checkIfExists({ uuid, objectType }: ICheckIfExistsRequest): boolean;
    private static getEventEmitterFromObject;
    static getAll(): IStore;
    static getAllAsArray(): Array<IMakeableObject>;
    static getAllInCoordinates({ x, y }: Position): Array<IMakeableObject>;
    static getAllFromType({ objectType }: IGetAllRequest): Array<IMakeableObject>;
    static update({ uuid, objectType, ...restObjectPropertiesToUpdate }: IUpdateRequest): void;
    static delete({ uuid, objectType }: IDeleteRequest): void;
    static deleteMany(objectsToDeleteArray: Array<IDeleteRequest>): void;
    static removeAll(): void;
}
