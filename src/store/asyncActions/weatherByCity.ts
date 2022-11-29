import { AnyAction, Dispatch } from "redux";
import { api } from "../../api";

export const fetchWeatherByCity = (
  lat: number,
  lon: number,
  name: string
): any => {
  const controller = new AbortController();
  const signal = controller.signal;

  return async (dispatch: Dispatch<AnyAction>) => {
    api.getWeatherByCity(lat, lon, name, signal, dispatch);
    return () => {
      controller.abort();
    };
  };
};
