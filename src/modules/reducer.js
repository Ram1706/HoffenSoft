import ACTIONS from './action';
import { combineReducers } from 'redux';
import {cloneDeep} from 'lodash';



const defaultStore={};
export const addSerachImagesToStore=(state=defaultStore,action) =>
{
    switch (action.type) {
        case ACTIONS.Types.SEARCH_IMAGE: {
          let details = action.payload;
          let newItem = {searchImagedetails:details};
          let newState = cloneDeep(state);
          newState = newItem;
          return newState;
        }
    
        default:
          return state;
      }
};

export  default combineReducers({
    images:addSerachImagesToStore
})