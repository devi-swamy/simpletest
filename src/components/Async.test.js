import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("Testing the rendered list contents", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "123", title: "new book" }]
    }); // this will hold the value when the fetch fn resolve its been called
    render(<Async />);
    const listelement = await screen.findAllByRole("listitem");
    expect(listelement).not.toHaveLength(0);
  });
});

// describe("Async Component", () => {
//   test("Testing the rendered list contents", async () => {
//     render(<Async />);
//     const listelement = await screen.findAllByRole("listitem");
//     expect(listelement).not.toHaveLength(1);
//   });
// });
