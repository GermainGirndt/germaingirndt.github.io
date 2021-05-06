import { IMakeableObject } from "../Objects/ObjectStore/ObjectFactory";
import { Position } from "../Shared/Interfaces";
declare function initObjects(): void;
declare function relocateObjectsOnScreen(): void;
declare function callNextFrame(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement, objects: Array<IMakeableObject>, mouse: Position): void;
export { initObjects, relocateObjectsOnScreen, callNextFrame };
