export default function cartReducer (state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        const tempstate = state.filter((item) => action.payload.id === item.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE_ITEM":
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;
      case "DECREASE_ITEM":
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "REMOVE_ITEM":
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );

        return tempstate3;

      default:
        return state;
    }
  };