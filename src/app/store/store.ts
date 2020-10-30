import {Action} from "@ngrx/store";


let initialState={
  n:0
}

export function counterReducer(state=initialState,action:Action) {
switch (action.type) {
  case 'increment':
    return {
      n:state.n+1
    }
  case 'decrement': return {
    n:state.n-1
  }
  default:
    return state;

}
}
