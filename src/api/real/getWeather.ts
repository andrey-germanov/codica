import axios, { AxiosResponse, GenericAbortSignal } from "axios";
import { AnyAction, Dispatch } from "redux";
import { getWeatherAction, incorrectCityAction } from "../../store/actions";
import { IWeatherCity } from "../../store/typeStore";

const apiKey = "5a808fd62f78702c87130a6f46054a30";

export const getWeather = async (
  cities: string[],
  signal: GenericAbortSignal,
  dispatch: Dispatch<AnyAction>
) => {
  const res = new Map();

  for (const city of cities) {
    const weather: AxiosResponse<IWeatherCity, any> | void = await axios
      .get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,
        { signal }
      )
      .then((res) => res.data)
      .then(async (json) => {
        if (!json[0]) dispatch(incorrectCityAction(city))
        const { lat, lon } = json[0];
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        return weatherData;
      })
      .catch((error) => console.log("error", error));
    if (weather) {
      res.set(city, weather.data);
    }
  }
  const data = Array.from(res, ([name, value]) => ({ name, value }));
  dispatch(getWeatherAction(data));
};