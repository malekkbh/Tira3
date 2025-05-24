const baseURL = "https://tira3-server.onrender.com";

export const createUser = async (body) => {
  const route = "/createUser";
  return await fetchAPI(route, body, "POST");
};

export const getAllproductsFromAPI = async () => {
  const route = "/getAllproducts";
  return await fetchAPI(route);
};

const fetchAPI = async (route, body, method = "GET") => {
  const url = baseURL + route;

  const params = {};

  if (body) {
    params.body = JSON.stringify(body);
  }

  params.method = method;

  return await fetch(url, params)
    .then((res) => res.json())
    .catch((error) => console.log("fetch error ", url, ":", error));
};
