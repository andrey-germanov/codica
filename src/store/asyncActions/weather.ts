import { AnyAction, Dispatch } from "redux";
import { api } from "../../api";

export const fetchWeather = (cities: string[]): any=> {
  const controller = new AbortController();
  const signal = controller.signal;

  return async (dispatch: Dispatch<AnyAction>) => {
    api.getWeather(cities, signal, dispatch);
    return () => {
      controller.abort();
    };
  };
  
};
