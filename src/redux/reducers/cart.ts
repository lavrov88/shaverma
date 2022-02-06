import { TCardActions } from "../actions/cart"

export type TCardItem = {
   id: number
   name: string
   img: string
   option1: string | null
   option2: string
   price: number
   count: number
}

export type TCartState = {
   items: TCardItem[]
   totalCount: number
   totalSum: number
}

const initialState: TCartState = {
   items: [
   ],
   totalCount: 0,
   totalSum: 0
}

const cartReducer = (state = initialState, action: TCardActions): TCartState => {
   
   switch (action.type) {
      case 'ADD_ITEM_TO_CART':
         const index = state.items.findIndex(item => (item.id === action.payload.id
                                                      && item.option1 === action.payload.option1
                                                      && item.option2 === action.payload.option2))
         if (index >= 0) {
            return {
               ...state,
               items: state.items.map((item, i) => i === index ? {...item, count: item.count + 1} : item)
            }
         } else {
            return {
               ...state,
               items: [...state.items, {
                  id: action.payload.id, 
                  name: action.payload.name, 
                  img: action.payload.img, 
                  option1: action.payload.option1,
                  option2: action.payload.option2, 
                  price: action.payload.price, 
                  count: 1
               }]
            }
         }

      case 'DECREASE_ITEM_AMOUNT':
         if (state.items[action.payload].count > 1) {
            return {
               ...state,
               items: state.items.map((item, i) => i === action.payload ? { ...item, count: item.count - 1 } : item)
            }
         } else {
            return {
               ...state,
               items: state.items.filter((item, i) => i !== action.payload)
            }
         }

      case 'INCREASE_ITEM_AMOUNT':
         return {
            ...state,
            items: state.items.map((item, i) => i === action.payload ? { ...item, count: item.count + 1 } : item)
         }

      case 'REMOVE_ITEM_FROM_CART':
         return {
            ...state,
            items: state.items.filter((item, i) => i !== action.payload)
         }

      case 'CLEAR_CART':
         return {
            ...state,
            items: state.items.filter(item => false)
         }

      case 'RECALCULATE_COUNT_AND_SUM':
         let count = 0, sum = 0
         state.items.forEach(item => {
            count += item.count
            sum += item.count * item.price
         })

         return {
            ...state,
            totalCount: count,
            totalSum: sum
         }

      default:
         return state
   }
}

export default cartReducer