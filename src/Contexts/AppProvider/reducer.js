import {actions} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
      case actions.muda: 
      return ({...state, title: action.payload});

      default: return {...state};
    }
    
  }