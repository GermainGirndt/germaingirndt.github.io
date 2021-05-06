import { ICircle } from "../Objects/CanvasObjects/Circle";
import { Area, Position } from "../Shared/Interfaces";
import { IMakeableObject } from "../Objects/ObjectStore/ObjectFactory";
interface IRandomIntFromRange {
    min: number;
    max: number;
}
declare function randomIntFromRange({ min, max }: IRandomIntFromRange): number;
interface IDistance {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
declare function calcDistance({ x1, y1, x2, y2 }: IDistance): number;
interface ICheckIfCoordinatesAreInArea {
    x: number;
    y: number;
    coordinateRadius?: number;
    areaX: number;
    areaY: number;
    areaRadius?: number;
}
declare function checkIfCoordinatesAreInArea({ x, y, coordinateRadius, areaX, areaY, areaRadius, }: ICheckIfCoordinatesAreInArea): boolean;
declare function getRandomPosition(coordinateRadius?: number): Position;
interface ICheckIfAnyAreaIsOccupiedByObject {
    areas: Array<Area>;
    object: ICircle;
}
declare function checkIfAnyAreaIsOccupiedByObject({ areas, object }: ICheckIfAnyAreaIsOccupiedByObject): boolean;
declare function randomColor(exceptionColorValue?: string | null): any;
declare const debounce: (func: any, wait: any) => (...args: any) => void;
declare function rotate({ dX, dY }: any, angle: number): {
    dX: number;
    dY: number;
};
declare function resolveCollision(particle: IMakeableObject, otherParticle: IMakeableObject): void;
export { randomIntFromRange, randomColor, calcDistance, checkIfCoordinatesAreInArea, getRandomPosition, checkIfAnyAreaIsOccupiedByObject, debounce, rotate, resolveCollision, };
