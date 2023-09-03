import instance from "../axios/index";

export const login = async (params) => {
  try {
    const { email, password } = params;

    const response = await instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    });

    const { token } = response.data;

    localStorage.setItem("accessToken", token);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
