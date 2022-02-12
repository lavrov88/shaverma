import { TCategory, TSortingName } from "../../common/types"
import { TMenuItem } from "../reducers/shavermas"

export type TShavermasActions  = TSetShavermasAction | TSetShavermasIsLoadingAction

export const setShavermas = (shavermas: Array<any>): TSetShavermasAction => ({
   type: 'SET_SHAVERMAS',
   payload: shavermas
})

type TSetShavermasAction = {
   type: 'SET_SHAVERMAS',
   payload: Array<TMenuItem>
}

export const fetchShavermas = (category: TCategory, sortBy: TSortingName) => {

   const categoryFetchParameter = () => category === 'all' ? '' : `?type=${category}`
   const sortFetchParameter = () => {
      let str = ''
      if (sortBy === 'default') {
         return '' // no parameters for default sorting
      }

      if (categoryFetchParameter()) { // add '?' if sorting is first parameter or '&' if is second one
         str += '&'
      } else {
         str += '?'
      }

      if (sortBy === 'alphabet') {
         str += `_sort=name&_order=asc`
      }
      if (sortBy === 'price') {
         str += `_sort=option2.0.price&_order=asc`
      }
      return str
   }

   return (dispatch: any) => {
      dispatch(SetShavermasIsLoading(true))
      // setTimeout(() => {
      //    console.log('0.5s delay for fetchting from server imitation')

         fetch('/menu' + categoryFetchParameter() + sortFetchParameter())
         .then(response => response.json())
         .then(data => dispatch(setShavermas(data)))
         .then(data => dispatch(SetShavermasIsLoading(false)))
      // }, 500)
   }
}

type TSetShavermasIsLoadingAction = {
   type: 'SET_SHAVERMAS_IS_LOADING'
   payload: boolean
}

export const SetShavermasIsLoading = (value: boolean) => ({
   type: 'SET_SHAVERMAS_IS_LOADING',
   payload: value
})