export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f166674e25875a43f58cf51a35b0df15&lang=ru&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}