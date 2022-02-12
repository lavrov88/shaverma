import { TCategory, TSortingName } from "../../common/types"


export const setCategory = (category: TCategory): TSetCategoryAction => ({
   type: 'SET_CATEGORY',
   payload: category
})

export const setSorting = (sorting: TSortingName): TSetSortingAction => ({
   type: 'SET_SORTING',
   payload: sorting
})

export type TNavMenuActions = TSetCategoryAction | TSetSortingAction

type TSetCategoryAction = {
   type: 'SET_CATEGORY',
   payload: TCategory
}

type TSetSortingAction = {
   type: 'SET_SORTING',
   payload: TSortingName
}