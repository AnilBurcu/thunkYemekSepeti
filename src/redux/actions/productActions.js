// api'dan urun verisini alip store'a aktarmali

import api from "../../utils/api";
import ActionTypes from "../actionTypes";

// Thunk aksiyonu
export const getProducts = (restId) => (dispatch) => {
  // Notify the reducer that loading has started
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  // Make the API request
  api
    .get(`/products?restaurantId=${restId}`)
    // If the request is successful, send the data to the reducer
    .then((res) =>
      dispatch({ type: ActionTypes.PRODUCT_SUCCESS, payload: res.data })
    )
    // If the request fails, send the error message to the reducer
    .catch((err) => {
      dispatch({ type: ActionTypes.PRODUCT_ERROR, payload: err.message });
    });
};
