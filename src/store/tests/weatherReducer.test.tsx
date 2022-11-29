import * as actions from "../actions";
import { mockWeather } from "./mock";
import { defaultState, weatherReducer } from "../weatherReducer";

describe("work reducer", () => {
  it("should return initial state", () => {
    expect(weatherReducer(undefined, actions.getInitialCityAction())).toEqual(
      defaultState
    );
  });

  it("should return incorrectCity", () => {
    const mock = {
      cities: [],
      incorrectCity: "qwer",
      weather: [],
    };
    expect(weatherReducer(defaultState, actions.incorrectCityAction('qwer'))).toEqual(
      mock
    );
  });
  it("should return weather", () => {
    const mock = {
      cities: [],
      incorrectCity: "",
      weather: [mockWeather],
    };
    expect(weatherReducer(defaultState, actions.getCityWeatherAction(mockWeather))).toEqual(
      mock
    );
  });
  it("should return some cities weather", () => {
    const mock = {
      cities: [],
      incorrectCity: "",
      weather: [mockWeather],
    };
    expect(weatherReducer(defaultState, actions.getWeatherAction([mockWeather]))).toEqual(
      mock
    );
  });
});
