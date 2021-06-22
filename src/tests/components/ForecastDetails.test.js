import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 25,
    wind: {
      speed: 15,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thursday 1st January 1970")).toHaveClass(
      "forecast-details__date"
    );
    expect(getByText("Max temp: 22°C")).toHaveClass(
      "forecast-details__temperature"
    );
    expect(getByText("Min temp: 12°C")).toHaveClass(
      "forecast-details__temperature"
    );
    expect(getByText("Humidity: 25%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByText("Wind speed: 15mph")).toHaveClass(
      "forecast-details__wind"
    );
    expect(getByText("Wind direction: S")).toHaveClass(
      "forecast-details__direction"
    );
  });
});
