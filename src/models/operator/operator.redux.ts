import { Action, Selector, State, StateContext } from "@ngxs/store";

export interface IRResponse {
  result: number;
}

export class AdditionOperatorAction {
  public static type = "[number] Addition";

  constructor(public num1: number, public num2: number) {}
}

export class SubstractOperatorAction {
  public static type = "[number] Substract";

  constructor(public num1: number, public num2: number) {}
}

export class MultiplicationOperatorAction {
  public static type = "[number] Multiplication";

  constructor(public num1: number, public num2: number) {}
}

export class DivisionOperatorAction {
  public static type = "[number] Division";

  constructor(public num1: number, public num2: number) {}
}

@State<IRResponse>({
  name: "responseState",
  defaults: {
    result: null
  }
})
export class ResponseState {
  constructor() {}

  @Selector()
  static getResult(state: IRResponse) {
    return state.result;
  }

  @Action(AdditionOperatorAction)
  addition(state: StateContext<IRResponse>, action: AdditionOperatorAction) {
    var res = action.num1 + action.num2;
    state.setState({
      result: res
    });
  }

  @Action(SubstractOperatorAction)
  substract(state: StateContext<IRResponse>, action: SubstractOperatorAction) {
    var res = action.num1 - action.num2;
    state.setState({
      result: res
    });
  }

  @Action(MultiplicationOperatorAction)
  multiplication(
    state: StateContext<IRResponse>,
    action: MultiplicationOperatorAction
  ) {
    var res = action.num1 * action.num2;
    state.setState({
      result: res
    });
  }

  @Action(DivisionOperatorAction)
  division(state: StateContext<IRResponse>, action: DivisionOperatorAction) {
    var res = action.num1 / action.num2;
    state.setState({
      result: res
    });
  }
}
