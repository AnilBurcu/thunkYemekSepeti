import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getRestaurants = (restId) => (dispatch) => {
  dispatch({
    type: ActionTypes.REST_LOADING,
  });
  // parametre olarak id alirsak 1 restorani alamazsak butun restoranlara istek atiyoruz
  const url = restId ? `/restaurants/${restId}` : "/restaurants";
  api
    .get("/restaurants")
    .then((res) =>
      dispatch({
        type: ActionTypes.REST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.REST_ERROR,
        payload: err.message,
      })
    );
};
