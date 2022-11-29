import * as actions from "../actions";
import * as constants from "../constants";
import { mockWeather } from "./mock";

describe("work actions", () => {
  it("should return the correct payload incorrectCityAction", () => {
    const expected = {
      type: constants.INCORRECT_CITY,
      incorrectCity: "nbjgmfnv",
    };
    expect(actions.incorrectCityAction("nbjgmfnv")).toEqual(expected);
  });

  it("should return the correct payload addNewCityAction", () => {
    const expected = {
      type: constants.ADD_NEW_CITY,
      newCity: "Odessa",
    };
    expect(actions.addNewCityAction("Odessa")).toEqual(expected);
  });

  it("should return the correct payload removeCityWeatherAction", () => {
    const expected = {
      type: constants.REMOVE_CITY,
      name: "Kiev",
    };
    expect(actions.removeCityWeatherAction("Kiev")).toEqual(expected);
  });

  it("should return the correct payload getInitialCityAction", () => {
    const expected = {
      type: constants.GET_INITIAL_CITY,
    };
    expect(actions.getInitialCityAction()).toEqual(expected);
  });

  it("should return the correct payload removeIncorrectCityAction", () => {
    const expected = {
      type: constants.REMOVE_INCORRECT_CITY,
    };
    expect(actions.removeIncorrectCityAction()).toEqual(expected);
  });

  it("should return the correct payload getCityWeatherAction", () => {
    const expected = {
      type: constants.GET_CITY_WEATHER,
      cityWeather: mockWeather,
    };

    expect(actions.getCityWeatherAction(mockWeather)).toEqual(expected);
  });

  it("should return the correct payload removeIncorrectCityAction", () => {

    const expected = {
      type: constants.GET_INITIAL_CITY,
    };

    expect(actions.getInitialCityAction()).toEqual(expected);
  });
});
