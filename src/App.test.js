import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rethink your living and renting/i);
  expect(linkElement).toBeInTheDocument();
});
