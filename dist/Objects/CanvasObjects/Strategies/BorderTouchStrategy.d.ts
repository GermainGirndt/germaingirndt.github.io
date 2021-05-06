import { IMakeableObject } from "../../ObjectStore/ObjectFactory";
interface hasBorderTouchStrategy {
    borderTouchStrategy: BaseBorderTouchStrategy;
}
declare abstract class BaseBorderTouchStrategy {
    protected object: IMakeableObject;
    protected isAnyBorderBeeingCrossed: boolean;
    protected isXBorderBeeingCrossed: boolean;
    protected isYBorderBeeingCrossed: boolean;
    protected isBottomBorderBeeingCrossed: boolean;
    protected isTopBorderBeeingCrossed: boolean;
    protected isLeftBorderBeeingCrossed: boolean;
    protected isRightBorderBeeingCrossed: boolean;
    apply(object: IMakeableObject): void;
    protected abstract applyConcreteStrategy(): void;
    protected checkIfAnyBorderIsBeeingCrossed(): boolean;
    protected checkIfYBorderIsBeingCrossed(): boolean;
    protected checkIfXBorderIsBeeingCrossed(): boolean;
    protected checkIfBottomBorderIsBeeingCrossed(): boolean;
    protected checkIfTopBorderIsBeeingCrossed(): boolean;
    protected checkIfLeftBorderIsBeeingCrossed(): boolean;
    protected checkIfRightBorderIsBeeingCrossed(): boolean;
}
declare class BorderTouchReflectionStrategy extends BaseBorderTouchStrategy {
    protected applyConcreteStrategy(): void;
}
export { BaseBorderTouchStrategy, hasBorderTouchStrategy, BorderTouchReflectionStrategy };
