import { TCategory } from '../../common/types';
import { TShavermasActions } from '../actions/shavermas';

type TMenuOption2Item = {
   name: string
   price: number
}

export type TMenuItem = {
   id: number
   img: string
   name: string
   type: TCategory
   option1?: string
   option2: Array<TMenuOption2Item>
}

type TShavermasState = {
   items: Array<TMenuItem>
   isLoading: boolean
}

const initialState: TShavermasState = {
   items: [],
   isLoading: false
}

const shavermasReducer = (state = initialState, action: TShavermasActions): TShavermasState => {
   if (action.type === 'SET_SHAVERMAS') {
      
      return {
         ...state,
         items: action.payload
      }
   }

   if (action.type === 'SET_SHAVERMAS_IS_LOADING') {
      return {
         ...state,
         isLoading: action.payload
      }
   }


   return state
}

export default shavermasReducer