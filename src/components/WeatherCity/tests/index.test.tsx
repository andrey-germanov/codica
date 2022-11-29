import {
  render,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { WeatherCity } from "..";

describe("should render WeatherCity component", () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(
      <Provider store={store}>
          <Router>
            <WeatherCity />
          </Router>
      </Provider>
    );
  });

  test("has weather",  () => {
    const links = comp.getAllByTestId("WeatherCity");

    expect(links).toHaveLength(1);
  });
});
