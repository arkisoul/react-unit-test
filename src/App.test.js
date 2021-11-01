import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn angular/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders react logo", () => {
  render(<App />);
  const imgElement = screen.getByAltText("logo");
  expect(imgElement).toBeInTheDocument();
});

test("renders the component correctly", () => {
  const output = shallow(<App />)
  expect(output.getElements()).toMatchSnapshot()
});
