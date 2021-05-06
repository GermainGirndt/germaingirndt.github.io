import { IMakeableObject } from "../../ObjectStore/ObjectFactory";
interface hasDrawStrategy {
    drawStrategy: BaseDrawStrategy;
}
declare abstract class BaseDrawStrategy {
    object: IMakeableObject;
    apply(object: IMakeableObject): void;
    protected abstract applyDrawStrategy(): void;
}
declare class DrawFullCircleStrategy extends BaseDrawStrategy {
    protected applyDrawStrategy(): void;
}
export { BaseDrawStrategy, hasDrawStrategy, DrawFullCircleStrategy };
