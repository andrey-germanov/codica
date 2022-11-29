import { WeatherListComp } from "../comp";
import responses from "../../../api/mock/responses";
import sinon from "sinon";
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { Provider, ReactReduxContext } from "react-redux";
import * as redux from "react-redux";
import { store } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("should render WeatherListComp component", () => {
  const mockCities = ["Odessa", "Kiev"];

  let comp: RenderResult;
  const props = {
    weather: responses.mockWeatherCities(mockCities),
    RefreshWeather: jest.fn(),
    RemoveCity: jest.fn(),
    AddCity: jest.fn(),
  };
  beforeEach(() => {
    comp = render(
      <Provider store={store}>
        <Router>
          <WeatherListComp {...props} />
        </Router>
      </Provider>
    );
  });

  describe("render textfield", () => {
    it("displays the correct input value ", async () => {
      const { getByTestId } = comp;
      const input = getByTestId("input-add-city") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "Mariupol" } });
      expect(input.value).toBe("Mariupol");
    });
  });

  describe("has weather", () => {
    it("simple props", () => {
      const links = comp.getAllByTestId("city");

      expect(links).toHaveLength(props.weather.length);
    });
  });

  it("should render city card ", () => {
    const cards = comp.getAllByTestId(`${mockCities[0]}`);
    expect(cards).toHaveLength(1);
  });
});
