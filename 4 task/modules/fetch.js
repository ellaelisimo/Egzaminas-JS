const ENDPOINT = "cars.json";

const showCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

showCars();

export { showCars };
