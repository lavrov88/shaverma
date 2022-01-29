
export const setShavermas = (shavermas: Array<any>): TSetShavermasAction => ({
   type: 'SET-SHAVERMAS',
   payload: shavermas
})

export type TSetShavermasAction = {
   type: 'SET-SHAVERMAS',
   payload: Array<any>
}