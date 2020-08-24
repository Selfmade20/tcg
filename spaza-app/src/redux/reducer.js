export const initialState = {
  basket: [
    {
      id: "2",
      title: "Playstation 5",
      price: 180,
      rating: 4,
      image:
        "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F65068ac0-acbf-11ea-b9fb-ee297695f454&client=amp-blogside-v2&signature=685370e53cbcbb00a28cd0d1b29be2585964ca57",
    },
    {
      id: "2",
      title: "Playstation 5",
      price: 180,
      rating: 4,
      image:
        "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F65068ac0-acbf-11ea-b9fb-ee297695f454&client=amp-blogside-v2&signature=685370e53cbcbb00a28cd0d1b29be2585964ca57",
    },
    {
      id: "2",
      title: "Playstation 5",
      price: 180,
      rating: 4,
      image:
        "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F65068ac0-acbf-11ea-b9fb-ee297695f454&client=amp-blogside-v2&signature=685370e53cbcbb00a28cd0d1b29be2585964ca57",
    },
  ],
  user: null,
};

export default function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      // adding items to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // removing from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      }else {

      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
