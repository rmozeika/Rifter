import * as types from '../constants/ActionTypes';

export const setConfig = config => ({
  type: types.setConfig,
  config
});

// export const getConfig = () => dispatch => {
//   // shop.getConfig(config => {
//   //   dispatch(setConfig(config));
//   // });
//     dispatch(setConfig({ needsToComeFrom: 'somewhere' }));
// };

export const getConfig = () => ({
    type: types.getConfig
});