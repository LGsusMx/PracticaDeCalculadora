import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import {
  AdditionOperatorAction,
  DivisionOperatorAction,
  MultiplicationOperatorAction,
  ResponseState,
  SubstractOperatorAction
} from "../../models/operator/operator.redux";
@Injectable()
export class OperatorsvcService {
  constructor(private store: Store) {}
  makeDivision(num1: number, num2: number) {
    this.store.dispatch(new DivisionOperatorAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  makeAddition(num1: number, num2: number) {
    this.store.dispatch(new AdditionOperatorAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  makeMultiplication(num1: number, num2: number) {
    this.store.dispatch(new MultiplicationOperatorAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  makeSubstract(num1: number, num2: number) {
    this.store.dispatch(new SubstractOperatorAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
}
