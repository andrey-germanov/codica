import { GenericAbortSignal } from "axios";
import { AnyAction, Dispatch } from "redux";
import { getWeatherAction } from "../../store/actions";
import responses from "./responses";

export const getWeather = (
  cities: string[],
  signal: GenericAbortSignal,
  dispatch: Dispatch<AnyAction>
  ) => {
  dispatch(getWeatherAction(responses.mockWeatherCities(cities)));
};