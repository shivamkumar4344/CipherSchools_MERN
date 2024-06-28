import { convertToFahrenheit, getWeatherTypeFromCode } from "../weatherUtil";

const WeatherSummary = ({currentWeather:{temperature,weatherCode,isCelcius}}) =>{
    return(
        <div>
            <h1 >{isCelcius ? `${temperature}° C`:`${convertToFahrenheit(temperature)}° F`}{" "}  | {getWeatherTypeFromCode(weatherCode)}{" "}</h1>
        </div>
    )
}

export default WeatherSummary;