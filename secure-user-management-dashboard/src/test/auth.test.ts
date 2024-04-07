import axios from "axios";
import { login } from "../auth/auth";

describe("login", () => {
  it("should return a token on successful login", async () => {
    const mockAxiosPost = jest.spyOn(axios, "post");

    mockAxiosPost.mockResolvedValue({ data: { token: "QpwL5tke4Pnpja7X4" } });

    const result = await login("eve.holt@reqres.in", "cityslicka");

    expect(result).toBe("QpwL5tke4Pnpja7X4");

    expect(mockAxiosPost).toHaveBeenCalledWith("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    mockAxiosPost.mockRestore();
  });

  //   it("should handle login failure", async () => {
  //     const mockAxiosPost = jest.spyOn(axios, "post");
  //     mockAxiosPost.mockRejectedValue({
  //       response: { data: { error: "Missing password" } },
  //     });
  //     try {
  //       await login("eve.holt@reqres.in", "");
  //     } catch (error) {
  //       expect((error as any).response.data.error).toBe("Missing password");
  //     }

  //     // Clean up
  //     mockAxiosPost.mockRestore();
  //   });
});
