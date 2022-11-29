import { IncorrectCityAlertComp } from "../comp";
import { render } from "@testing-library/react";

describe("should render IncorrectCityAlert", () => {
  const incorrectCity = 'asdfwer'
  const comp = render(<IncorrectCityAlertComp incorrectCity={incorrectCity} />);
  
  expect(comp).toMatchSnapshot();

  it("render correct value prop incorrectCity", () => {
    const greeting = comp.getByTestId("incorrectCity");
    expect(greeting.textContent).toBe(incorrectCity);
  });
});
