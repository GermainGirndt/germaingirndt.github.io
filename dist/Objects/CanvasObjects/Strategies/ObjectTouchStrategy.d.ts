import { IMakeableObject } from "../../ObjectStore/ObjectFactory";
import { ICircle } from "../Circle";
interface hasObjectTouchStrategy {
    objectTouchStrategy: BaseObjectTouchStrategy;
}
declare abstract class BaseObjectTouchStrategy {
    protected object: IMakeableObject;
    protected objectTouching: ICircle | null;
    apply(object: IMakeableObject): void;
    protected abstract applyObjectTouchStrategy(): void;
    protected checkIfObjectsTouch(): boolean;
}
declare class ObjectTouchReflectionStrategy extends BaseObjectTouchStrategy {
    protected applyObjectTouchStrategy(): void;
}
export { BaseObjectTouchStrategy, hasObjectTouchStrategy, ObjectTouchReflectionStrategy };
