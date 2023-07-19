// Reducer function to manage the cart state based on different actions
export default function cartReducer(state, action) {
  switch (action.type) {
    // Case for adding an item to the cart
    case "ADD_ITEM":
      // Check if the item with the same ID already exists in the cart
      const tempstate = state.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        // If item exists, do not add it again and return the current state unchanged
        return state;
      } else {
        // If item doesn't exist, add it to the cart and return the updated state
        return [...state, action.payload];
      }

    // Case for increasing the quantity of an item in the cart
    case "INCREASE_ITEM":
      // Map through the cart items and find the one with the matching ID
      const tempstate1 = state.map((item) => {
        if (item.id === action.payload.id) {
          // If the item is found, increase its quantity by 1 and return the updated item
          return { ...item, quantity: item.quantity + 1 };
        } else {
          // For other items, return them as they are
          return item;
        }
      });
      // Return the updated state after the quantity increase
      return tempstate1;

    // Case for decreasing the quantity of an item in the cart
    case "DECREASE_ITEM":
      // Map through the cart items and find the one with the matching ID
      const tempstate2 = state.map((item) => {
        if (item.id === action.payload.id) {
          // If the item is found, decrease its quantity by 1 (if it's greater than 1) and return the updated item
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // For other items, return them as they are
          return item;
        }
      });
      // Return the updated state after the quantity decrease
      return tempstate2;

    // Case for removing an item from the cart
    case "REMOVE_ITEM":
      // Filter out the item with the matching ID and return the updated state
      const tempstate3 = state.filter((item) => item.id !== action.payload.id);
      return tempstate3;

    // Default case: return the current state unchanged if the action type is not recognized
    default:
      return state;
  }
};
