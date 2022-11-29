import { shallow, ShallowWrapper } from "enzyme";
import { WeatherListComp } from "../comp";
import responses from "../../../api/mock/responses";
import sinon from "sinon";
import toJson from "enzyme-to-json";

describe("should render WeatherListComp component", () => {
  const mockCities = ["Odessa", "Kiev"];

  const props = {
    weather: responses.mockWeatherCities(mockCities),
    RefreshWeather: sinon.spy(),
    RemoveCity: sinon.spy(),
    AddCity: sinon.spy(),
  };

  const comp: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  > = shallow(<WeatherListComp {...props} />);

  expect(toJson(comp)).toMatchSnapshot();
  
  describe("has weather", () => {
    const component = shallow(<WeatherListComp {...props} />);
    it("simple props", () => {
      const links = component.find("Link");

      expect(links.length).toBe(props.weather.length);
    });
  });

  describe("has no weather", () => {
    it("props without weather", () => {
      const props = {
        RefreshWeather: sinon.spy(),
        RemoveCity: sinon.spy(),
        AddCity: sinon.spy(),
      };
      const component = shallow(<WeatherListComp {...props} />);
      const links = component.find("Link");

      expect(links).toHaveLength(0);
    });
  });

  it("should contain .WeatherListComp wrapper", () => {
    const wrapperId = comp.find("#WeatherListComp");

    expect(wrapperId).toHaveLength(1);
  });

  it("should render city card ", () => {
    const cards = comp.find(`#${mockCities[0]}`);
    expect(cards).toHaveLength(1);
  });

  it("should contain links equal count cities in weather array ", () => {
    const links = comp.find("Link");

    expect(links).toHaveLength(props.weather.length);
  });
});
