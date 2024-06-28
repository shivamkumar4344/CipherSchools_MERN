const wmoWeatherCode = new Map();

wmoWeatherCode.set(0,"Clear Sky");
wmoWeatherCode.set(1,"Mainly Clear");
wmoWeatherCode.set(2,"Partly Cloudy");
wmoWeatherCode.set(3,"Overcast");
wmoWeatherCode.set(45,"Fog");
wmoWeatherCode.set(48,"Depositing Rime Fog");
wmoWeatherCode.set(51,"Drizzle: Light");
wmoWeatherCode.set(53,"Drizzle: Moderate");
wmoWeatherCode.set(1,"Drizzle: Heavy");
wmoWeatherCode.set(1,"Rain: Light");
wmoWeatherCode.set(1,"Rain: Moderate");

const convertToFahrenheit = (celciusTemp) =>(
    (celciusTemp*9)/5+32
.toFixed(1));


const getWeatherTypeFromCode = (code) => wmoWeatherCode.get(code);

export {convertToFahrenheit,getWeatherTypeFromCode};
