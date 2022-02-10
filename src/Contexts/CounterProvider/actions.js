import * as types from './types'

export const incrementCounter = (dispatch) =>{
  dispatch({type: types.INCREMET_COUNTER});
}

export const decrementCounter = (dispatch) =>{
  dispatch({type: types.DECREMET_COUNTER});
}