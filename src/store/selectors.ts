import { RootState } from '.';
import { IWeatherCity } from './typeStore';


export const weatherSelector = (state: RootState): IWeatherCity[] =>
  state.weatherReducer.weather;

export const incorrectSelector = (state: RootState): string =>
  state.weatherReducer.incorrectCity;

export const citiesSelector = (state: RootState): string[] =>
  state.weatherReducer.cities;
