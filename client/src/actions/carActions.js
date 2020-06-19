import axios from "axios";

import { GET_ERRORS } from "./types";

export const addCar = (carData, history) => (dispatch) => {
  axios
    .post("/api/cars/add", carData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};