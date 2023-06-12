import axios from "axios";

export async function getRandomKartCombination(id: number) {
  return await axios
    .get(`http://localhost:5000/api/combination`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
