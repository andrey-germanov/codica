import { IWeatherCity } from "./store/typeStore";
import * as R from 'ramda';

export const deleteDublicateCity = (cityWeather: IWeatherCity[]) =>
R.uniq(cityWeather);