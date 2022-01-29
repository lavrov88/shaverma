import { TSetShavermasAction } from '../actions/shavermas';

type TShavermasState = {
   items: Array<any>
}

const initialState: TShavermasState = {
   items: []
}

type TShavermasReducer = (state: TShavermasState, 
                        action: TSetShavermasAction) => TShavermasState

const cartReducer: TShavermasReducer = (state = initialState, action) => {
   if (action.type === 'SET-SHAVERMAS') {
      return {
         ...state,
         items: action.payload
      }
   }

   return state
}

export default cartReducer