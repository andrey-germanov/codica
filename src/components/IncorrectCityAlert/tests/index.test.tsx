import { shallow } from "enzyme";
import { IncorrectCityAlertComp } from "../comp";
import toJson from "enzyme-to-json";

describe("should render IncorrectCityAlert", () => {
  const incorrectCity = "sfdafr";

  const comp = shallow(
    <IncorrectCityAlertComp incorrectCity={incorrectCity} />
  );
  expect(toJson(comp)).toMatchSnapshot();

  expect(comp.length).toBe(1);
  it("render correct value prop incorrectCity", () => {
    expect(comp.text()).toBe(
      `incorrect city, it will not be added for your list cities:${incorrectCity}`
    );
  })
});
