export const addItemToCart = ({ id, name, img, option1, option2, price }: TCartItemProps): TAddItemToCart => ({
   type: 'ADD_ITEM_TO_CART',
   payload: { id, name, img, option1, option2, price}
})

export const recalculateCountAndSum = (): TRecalculateCountAndSum => ({
   type: 'RECALCULATE_COUNT_AND_SUM'
})

export const decreaseItemAmount = (index: number): TDecreaseItemAmount => ({
   type: 'DECREASE_ITEM_AMOUNT',
   payload: index
})

export const increaseItemAmount = (index: number): TIcreaseItemAmount => ({
   type: 'INCREASE_ITEM_AMOUNT',
   payload: index
})

export const removeItemFromCart = (index: number): TRemoveItemFromCart => ({
   type: 'REMOVE_ITEM_FROM_CART',
   payload: index
})

export const clearCart = (): TClearCart => ({
   type: 'CLEAR_CART'
})

export type TCardActions =  TAddItemToCart | TRemoveItemFromCart | TRecalculateCountAndSum
                           | TDecreaseItemAmount | TIcreaseItemAmount | TClearCart

type TAddItemToCart = {
   type: 'ADD_ITEM_TO_CART',
   payload: TCartItemProps
}

type TDecreaseItemAmount = {
   type: 'DECREASE_ITEM_AMOUNT',
   payload: number
}

type TIcreaseItemAmount = {
   type: 'INCREASE_ITEM_AMOUNT',
   payload: number
}

type TRemoveItemFromCart = {
   type: 'REMOVE_ITEM_FROM_CART',
   payload: number
}

type TClearCart = {
   type: 'CLEAR_CART'
}

type TRecalculateCountAndSum = {
   type: 'RECALCULATE_COUNT_AND_SUM'
}

type TCartItemProps = {
   id: number
   name: string
   img: string
   option1: string | null
   option2: string
   price: number
}