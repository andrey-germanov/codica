import axios, { GenericAbortSignal } from "axios";
import { AnyAction, Dispatch } from "redux";
import { getCityWeatherAction } from "../../store/actions";

const apiKey = "5a808fd62f78702c87130a6f46054a30";

export const getWeatherByCity = async (
  lat: number,
  lon: number,
  name: string,
  signal: GenericAbortSignal,
  dispatch: Dispatch<AnyAction>
) => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      { signal }
    )
    .then((res) => {
      dispatch(getCityWeatherAction({ name, value: res.data }));
    });
};
