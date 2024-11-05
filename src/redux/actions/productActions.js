import axios from "axios";
import api from "../../utils/api";

//! Aksiyon Olusturan Fonksiyonlar
// 1- Senkron olanlar

export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

// 2- Asenkron olanlar

// 3- restoran verilerini alip store'a aktaran asenkron aksiyon

// export const getRestaurants = () => (dispatch) => {
//   dispatch({
//     type: "REST_LOADING",
//   });
//   api
//     .get("/restaurants")
//     .then((res) =>
//       dispatch({
//         type: "REST_SUCCESS",
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: "REST_ERROR",
//         payload: err.message,
//       })
//     );
// };

// restorana gore urun verilerini alip store'a aktaran aksiyon
export const getProducts = () => {
  // getData fonk. asenkron bir fonk. return etmeli
  return async (dispatch) => {
    dispatch(setLoading());
    api
      .get("/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
