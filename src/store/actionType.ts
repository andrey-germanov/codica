import * as constants from './constants'
import { IWeatherCity } from './typeStore';

export type actionWeather = {
  type: constants.GET_WEATHER;
  weather: IWeatherCity[];
};
export type actionCityWeather = {
  type: constants.GET_CITY_WEATHER;
  cityWeather: IWeatherCity;
};
export type actionCityName = {
  type: constants.REMOVE_CITY;
  name: string;
};

export type actionCities = {
  type: constants.GET_INITIAL_CITY;
};

export type actionNewCity = {
  type: constants.ADD_NEW_CITY;
  newCity: string;
};

export type actionIncorrectCity = {
  type: constants.INCORRECT_CITY;
  incorrectCity: string;
};

export type actionRemoveIncorrectCity = {
  type: constants.REMOVE_INCORRECT_CITY;
};

export type actionType =
  | actionWeather
  | actionCityWeather
  | actionCityName
  | actionCities
  | actionNewCity
  | actionIncorrectCity
  | actionRemoveIncorrectCity;
