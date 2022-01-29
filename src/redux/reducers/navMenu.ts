import { TSetCategoryAction, TSetSortingAction } from './../actions/navMenu';
import { TSortingName, TCategory } from './../../common/types';

type TNavMenuState = {
   category: TCategory
   sortBy: TSortingName
}

const initialState: TNavMenuState = {
   category: 'all',
   sortBy: 'popularity'
}

type TNavMenuReducer = (state: TNavMenuState, 
                        action: TSetCategoryAction | TSetSortingAction) => TNavMenuState

const navMenuReducer: TNavMenuReducer = (state = initialState, action) => {
   if (action.type === 'SET_CATEGORY') {
      return {
         ...state,
         category: action.payload
      }
   }
   if (action.type === 'SET_SORTING') {
      return {
         ...state,
         sortBy: action.payload
      }
   }

   return state
}

export default navMenuReducer