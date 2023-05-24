import React from 'react';
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Error from "./components/Error"

describe("Error component unit tests", () => {
  test("should render Error component correctly", () => {
    render(<Error />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual("Something went wrong");
  });
});