import { getWeatherData } from "./api.js";
import { createContent } from "./content.js";
import { createHeader } from "./header.js";

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Омск');
    const header = createHeader(weather.name);
    const content = createContent(weather);
    document.body.append(header, content);
}

app();