import * as R from "ramda";
import {
  addCityLocalStorage,
  initialCity,
  removeCityLocalStorage,
  removeIncorrectCity,
} from "./LocalStorage";
import { IWeatherCity } from "./typeStore";
import { actionType } from "./actionType";
import * as constants from './constants'
import { deleteDublicateCity } from "../utils";

export interface IStore {
  weather: IWeatherCity[];
  cities: string[];
  incorrectCity: string;
}

export const defaultState: IStore = {
  weather: [],
  cities: [],
  incorrectCity: "",
};

export const weatherReducer = (
  state = defaultState,
  action: actionType
): IStore => {
  switch (action.type) {
    case constants.GET_INITIAL_CITY:
      return { ...state, cities: initialCity() };
    case constants.ADD_NEW_CITY:
      return { ...state, cities: addCityLocalStorage(action.newCity) };
    case constants.GET_WEATHER:
      return { ...state, weather: action.weather };
    case constants.REMOVE_CITY:
      return { ...state, cities: removeCityLocalStorage(action.name) };
    case constants.GET_CITY_WEATHER:
      return {
        ...state,
        weather: deleteDublicateCity([...state.weather, action.cityWeather]),
      };
    case constants.INCORRECT_CITY:
      return {
        ...state,
        incorrectCity: wrapperRemoveIncorrectCity(action.incorrectCity),
        cities: initialCity(),
      };
    case constants.REMOVE_INCORRECT_CITY:
      return {
        ...state,
        incorrectCity: "",
      };
    default:
      return state;
  }
};

const wrapperRemoveIncorrectCity = (name: string) => {
  removeIncorrectCity(name);
  return name;
};