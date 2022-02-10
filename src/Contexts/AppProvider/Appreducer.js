import * as types from './AppTypes' 

export const reducer = (state, action) => {
    switch (action.type) {
      case types.MUDA: 
      return ({...state, title: action.payload});
    }
    return {...state};
  }