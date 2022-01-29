import { TCategory, TSortingName } from "../../common/types"


export const setCategory = (category: TCategory): TSetCategoryAction => ({
   type: 'SET_CATEGORY',
   payload: category
})

export const setSorting = (sorting: TSortingName) => ({
   type: 'SET_SORTING',
   payload: sorting
})

export type TSetCategoryAction = {
   type: 'SET_CATEGORY',
   payload: TCategory
}

export type TSetSortingAction = {
   type: 'SET_SORTING',
   payload: TSortingName
}