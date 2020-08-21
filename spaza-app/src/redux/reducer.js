export const initialState = {
  basket: [],
};

export default function reducer(state, action) {
    console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      // adding items to basket
      return { ...state,
        basket: [...state.basket, action.item]
    };
    case "REMOVE_FROM_BASKET":
      // removing from basket
      return { state };
    default:
      return state;
  }
}
