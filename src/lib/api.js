import { CoreApi } from "./coreApi";

class FoodOrderApp extends CoreApi {
  constructor(a) {
    super();
  }

  getAllMeals = async () => {
    const response = await this.get("/meals.json");
    if (!response.ok) {
      throw new Error("Could not fetch meals");
    }
    const data = await response.json();

    const transformMeals = [];

    for (const key in data) {
      transformMeals.push({
        id: key,
        ...data[key],
      });
    }

    return transformMeals;
  };

  postOrder = async (orderData) => {
    const response = await this.post("/orders.json", orderData);
    if (!response.ok) {
      throw new Error("Send orders failed");
    }
    return null;
  };
}

export const foodOrderApp = new FoodOrderApp();
