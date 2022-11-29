import { actionType } from './actionType';
import * as constants from './constants'
import { IWeatherCity } from './typeStore';


export const incorrectCityAction = (incorrectCity: string): actionType => ({
    type: constants.INCORRECT_CITY,
    incorrectCity,
  });
  
  export const removeIncorrectCityAction = (): actionType => ({
    type: constants.REMOVE_INCORRECT_CITY,
  });
  
  export const getInitialCityAction = () : actionType => ({
    type: constants.GET_INITIAL_CITY,
  });
  
  export const addNewCityAction = (newCity: string): actionType => ({
    type: constants.ADD_NEW_CITY,
    newCity,
  });
  
  export const getWeatherAction = (weather: IWeatherCity[]): actionType => ({
    type: constants.GET_WEATHER,
    weather,
  });
  
  export const getCityWeatherAction = (cityWeather: IWeatherCity): actionType => ({
    type: constants.GET_CITY_WEATHER,
    cityWeather,
  });
  
  export const removeCityWeatherAction = (name: string) : actionType => ({
    type: constants.REMOVE_CITY,
    name,
  });
  