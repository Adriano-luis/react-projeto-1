import P from 'prop-types';
import { createContext, useReducer } from 'react';
import {reducer} from './reducer';
import {GlobalState} from './data';
import {actions} from './actions';

export const Context = createContext();
export const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, GlobalState);
  //const [title, body, counter] = state;

  const changeTitle = (payload) =>{
    dispatch({type: actions.muda, payload});
  }
  return(
    <Context.Provider value={{state, changeTitle}}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node.isRequired,
}