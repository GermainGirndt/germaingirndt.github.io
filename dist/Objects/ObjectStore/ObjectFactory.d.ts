import { ICircle, ICircleRequest } from "../CanvasObjects/Circle";
declare type IMakeableObjectRequest = ICircleRequest;
declare type MakeableObjectType = "Circle";
declare type IMakeableObject = ICircle;
declare type IMakeRequest = Omit<IMakeableObjectRequest, "uuid" | "eventEmitter">;
export default class ObjectFactory {
    static make({ objectType, ...restProperties }: IMakeRequest): IMakeableObject;
}
export { IMakeRequest, IMakeableObjectRequest, MakeableObjectType, IMakeableObject };
