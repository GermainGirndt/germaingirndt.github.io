declare class AnimationController {
    private _isPaused;
    private _startTime;
    private _lastResumeDate;
    private _acumulatedAnimationTime;
    get isPaused(): boolean;
    resetAll(): void;
    set isPaused(newPauseState: boolean);
    private handleSetPauseSideEffects;
    tooglePause(): void;
    get startTime(): Date;
    private calculateTimeElapsed;
    get timeElapsed(): number;
    get animationTime(): number;
    logStartTime(): void;
    logTimeElapsed(): void;
    logAnimationTime(): void;
    logInfo(): void;
    debug(): void;
}
declare const animationController: AnimationController;
export default animationController;
