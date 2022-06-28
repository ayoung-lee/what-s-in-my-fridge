export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DEL_INGREDIENT = 'DEL_INGREDIENT'

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  }
}

export const delIngredient = (ingredient) => {
  return {
    type: DEL_INGREDIENT,
    payload: ingredient,
  }
}