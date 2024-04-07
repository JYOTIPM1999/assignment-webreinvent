import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a name", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe("login", () => {
//   it("should return a token on successful login", async () => {
//     const mockAxiosPost = jest.spyOn(axios, "post");

//     mockAxiosPost.mockResolvedValue({ data: { token: "QpwL5tke4Pnpja7X4" } });

//     const result = await login("eve.holt@reqres.in", "cityslicka");

//     expect(result).toBe("QpwL5tke4Pnpja7X4");

//     expect(mockAxiosPost).toHaveBeenCalledWith("https://reqres.in/api/login", {
//       email: "eve.holt@reqres.in",
//       password: "cityslicka",
//     });
//     mockAxiosPost.mockRestore();
//   });

//   //   it("should handle login failure", async () => {
//   //     const mockAxiosPost = jest.spyOn(axios, "post");
//   //     mockAxiosPost.mockRejectedValue({
//   //       response: { data: { error: "Missing password" } },
//   //     });
//   //     try {
//   //       await login("eve.holt@reqres.in", "");
//   //     } catch (error) {
//   //       expect((error as any).response.data.error).toBe("Missing password");
//   //     }

//   //     // Clean up
//   //     mockAxiosPost.mockRestore();
//   //   });
// });
