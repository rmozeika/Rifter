import config, * as fromConfig from './config'
import { combineReducers } from 'redux'
import types from './types';

export const types = types;
export const initialState = {
    config: {}
};

// import localization, * as fromLocalization from './localization'
// import {
//   cartReducer,
// } from 'react-shopping-cart';

export default combineReducers({
  config
});

export const getConfig = state => fromConfig.getConfig(state.config)

  
    
