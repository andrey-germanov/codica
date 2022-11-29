import { fetchWeather } from "../asyncActions/weather";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import responses from "../../api/mock/responses";
import { fetchWeatherByCity } from "../asyncActions/weatherByCity";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test AsyncActions", () => {
  it("should test fetchWeather", () => {
    const param = ["Odessa", "Kiev"];
    const dispatch = jest.fn().mockImplementation();
    const getState = () => ({
      weather: [],
    });

    const expectedAction = {
      type: "GET_WEATHER",
      weather: responses.mockWeatherCities(param),
    };

    const callback = fetchWeather(param);
    expect(typeof callback).toBe("function");

    callback.call(this, dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual([expectedAction]);
  });
  
  it("should test fetchWeatherByCity", () => {
    const dispatch = jest.fn().mockImplementation();
    const getState = () => ({
      weather: [],
    });

    const expectedAction = {
      type: "GET_CITY_WEATHER",
      cityWeather: responses.mockWeatherByCity('Odessa', 32, 33),
    };

    const callback = fetchWeatherByCity(32, 33, 'Odessa');
    expect(typeof callback).toBe("function");

    callback.call(this, dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual([expectedAction]);
  });
});
