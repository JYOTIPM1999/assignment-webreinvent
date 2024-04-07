import axios from "axios";

export async function login(email: string, password: string): Promise<string> {
  try {
    const res = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });

    const token = res.data.token;
    return token;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
}
