import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp({ info }) {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelsLike: 20.39,
        humidity: 66,
        temp: 20.56,
        tempMax: 20.56,
        tempMin: 20.56,
        weather: "scattered clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <center>
            <div>
                <h2>WEATHER APP</h2>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </center>

    )
}