import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCityAction,
  getInitialCityAction,
  removeCityWeatherAction,
} from "../../store/actions";
import { AppDispatch } from "../../store";
import { citiesSelector, weatherSelector } from "../../store/selectors";
import { fetchWeather } from "../../store/asyncActions/weather";
import { fetchWeatherByCity } from "../../store/asyncActions/weatherByCity";
import { WeatherListComp } from "./comp";

export const WeatherList = () => {
  const weather = useSelector(weatherSelector);
  const cities = useSelector(citiesSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getInitialCityAction());
  }, []);
  
  useEffect(() => {
    dispatch(fetchWeather(cities));
  }, [cities]);

  const addCity = (inputNewCity: string) => {
    dispatch(addNewCityAction(inputNewCity)); // 1
  };

  const handlerRefreshWeather = (lat: number, lon: number, name: string) => {
    dispatch(fetchWeatherByCity(lat, lon, name));
  };

  const handlerRemoveCity = (name: string) => {
    dispatch(removeCityWeatherAction(name));
  };

  return (
    <WeatherListComp
      RefreshWeather={handlerRefreshWeather}
      RemoveCity={handlerRemoveCity}
      AddCity={addCity}
      weather={weather}
    />
  );
};
