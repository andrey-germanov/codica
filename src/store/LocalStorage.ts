import * as R from "ramda";
import { deleteDublicateCity } from "../utils";
import { IWeatherCity } from "./typeStore";

const get = () => JSON.parse(window.localStorage.getItem("cities") || "[]");

export const addCityLocalStorage = (newCity: string) => {
  window.localStorage.setItem(
    "cities",
    JSON.stringify(deleteDublicateCity([...get(), newCity]))
  );

  return get();
};

export const initialCity = () => {
  window.localStorage.setItem("cities", JSON.stringify(get()));
  return get();
};

export const removeCityLocalStorage = (name: string) => {
  const newData = get().filter((city: string) => city !== name);
  window.localStorage.setItem("cities", JSON.stringify(newData));
  return get();
};

export const removeIncorrectCity = (name: string) => {
  const data = get().filter((city: string) => city !== name);
  window.localStorage.setItem("cities", JSON.stringify(data));

  return get();
};
