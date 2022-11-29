import { AnyAction, Dispatch } from "redux";
import { GenericAbortSignal } from "axios";
import { getCityWeatherAction } from "../../store/actions";
import responses from "./responses";

export const getWeatherByCity = (
  lat: number,
  lon: number,
  name: string,
  signal: GenericAbortSignal,
  dispatch: Dispatch<AnyAction>
) => {
  const data = responses.mockWeatherByCity(name, lat, lon);
  dispatch(getCityWeatherAction(data));
};