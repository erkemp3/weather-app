import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the text Weather App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
