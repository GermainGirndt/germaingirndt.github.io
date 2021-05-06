import { BaseDrawStrategy, hasDrawStrategy } from "./DrawStrategy";
import { BaseBorderTouchStrategy, hasBorderTouchStrategy } from "./BorderTouchStrategy";
import { BaseObjectTouchStrategy, hasObjectTouchStrategy } from "./ObjectTouchStrategy";
import { IMakeableObject } from "../../ObjectStore/ObjectFactory";
import { ICircle } from "../Circle";
interface canUpdate {
    update({}: any): void;
}
interface hasUpdateStrategy {
    updateStrategy: canUpdate;
}
declare abstract class BaseUpdateStrategy implements canUpdate, hasDrawStrategy, hasBorderTouchStrategy, hasObjectTouchStrategy {
    object: IMakeableObject;
    drawStrategy: BaseDrawStrategy;
    borderTouchStrategy: BaseBorderTouchStrategy;
    objectTouchStrategy: BaseObjectTouchStrategy;
    protected abstract applyUpdateStrategy({ uuid, objectType }: any): void;
    update(object: ICircle): void;
}
declare class UpdateFullCircleStrategy extends BaseUpdateStrategy {
    constructor();
    protected applyUpdateStrategy(object: IMakeableObject): void;
}
export { canUpdate, BaseUpdateStrategy, UpdateFullCircleStrategy, hasUpdateStrategy };
