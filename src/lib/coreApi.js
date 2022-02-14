const DOMAIN = "https://food-order-app-3eff6-default-rtdb.firebaseio.com";

export class CoreApi {
  get = (url) => {
    return fetch(`${DOMAIN}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  post = (url, model) => {
    return fetch(`${DOMAIN}/${url}`, {
      method: "POST",
      body: JSON.stringify(model),
      headers: {
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  put = (url, model) => {
    return fetch(`${DOMAIN}/${url}`, {
      method: "PUT",
      body: JSON.stringify(model),
      headers: {
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  delete = (url) => {
    return fetch(`${DOMAIN}/${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
