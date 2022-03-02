const API_URL = "https://fakestoreapi.com/users/";

const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
