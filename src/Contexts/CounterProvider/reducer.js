import * as types from './types'

export const reducer = (state, action) => {
    switch (action.type) {
      case types.INCREMET_COUNTER: {
        return ({...state, counter: state.counter + 1})
      } 
      case types.DECREMET_COUNTER: {
        return ({...state, counter: state.counter - 1})
      }
        

      default: return {...state};
    }
    
  }