import { EventEmitter } from "@angular/core";
import { Position, Velocity } from "../../Shared/Interfaces";
import { MakeableObjectType } from "../ObjectStore/ObjectFactory";
import { canUpdate } from "./Strategies/UpdateStrategy";
interface ICanvasObject extends ICanvasObjectRequest, canUpdate {
    draw(): void;
    update(): void;
}
interface ICanvasObjectRequest {
    uuid: string;
    position: Position;
    velocity: Velocity;
    mass: number;
    color: string;
    objectType: MakeableObjectType;
    eventEmitter: EventEmitter<any>;
}
export default abstract class CanvasObject implements ICanvasObject {
    uuid: string;
    position: Position;
    velocity: Velocity;
    mass: number;
    color: string;
    objectType: MakeableObjectType;
    eventEmitter: EventEmitter<any>;
    constructor({ position, velocity, mass, color, uuid, objectType, eventEmitter }: ICanvasObjectRequest);
    draw(): void;
    update(): void;
    private resetObjectProperties;
}
export { ICanvasObject, ICanvasObjectRequest };
