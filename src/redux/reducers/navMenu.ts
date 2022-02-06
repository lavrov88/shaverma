import { TNavMenuActions } from './../actions/navMenu';
import { TSortingName, TCategory } from './../../common/types';

type TNavMenuState = {
   category: TCategory
   sortBy: TSortingName
}

const initialState: TNavMenuState = {
   category: 'all',
   sortBy: 'default'
}

const navMenuReducer = (state = initialState, action: TNavMenuActions): TNavMenuState => {
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