const API_URL = "https://fakestoreapi.com/users/";
const API_URL_Login = "https://fakestoreapi.com/auth/login";

// register user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  console.log("register Data", data);

  return data;
};
// login user
const login = async (userData) => {
  const response = await fetch(API_URL_Login, {
    method: "POST",
    body: JSON.stringify(userData),
  });
  const data = await response.json();

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  console.log("Login Data", data);

  return data;
};
// logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
