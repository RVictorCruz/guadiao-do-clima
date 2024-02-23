import axios from "axios";
import { apikey } from "./config.js";

export async function consultarAPi() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=São luis, br&lang=pt_br&appid=${apikey}`;
  // "https://api.openweathermap.org/data/2.5/weather?q=São Luis&lang=pt_br&appid=475823ee622ed2e28f31ff84e43afa5e";
  // "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&lang=pt_br&appid=475823ee622ed2e28f31ff84e43afa5e";

  try {
    const resposta = await axios.get(apiUrl);

    if (resposta.status !== 200) {
      throw Error("Error ao fazer requisição à API");
    }
    return console.table(resposta.data);
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
}
