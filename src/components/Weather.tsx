import Searchinfo from "@/components/Searchinfo";
import Weatherinfo from "@/components/Weatherinfo";
import Forecastlist from "@/components/Forecastlist";
import {useState} from "react";
import {CallForcastApi, CallWeatherApi} from "@/Api/api";
import {bgWhite} from "next/dist/lib/picocolors";
import {ForecastResponse} from "@/types/api/ForecastResponse";

interface Props {
    city: string;
}
function Weather({city}:Props) {
    const [WeatherState , SetWeatherState] = useState<Weather>({
        city : '',
        wind : 0,
        humidity : 0,
        description : '',
        icon : '',
        daily : [],
    })
    const [forecastState , setForecastState ] = useState<ForecastResponse | null>(null);
    // console.log(WeatherState);
    const getWeatherData =async (city : string) => {
        const response = await CallWeatherApi ({city});

        const weather : Weather ={
            city : response.name ,
            wind : response.wind.speed ,
            humidity : response.main.humidity ,
            description : response.weather[0].description,
            icon : response.weather[0].icon,
            daily : [],
        }
        SetWeatherState(weather);
        // console.log(response);

       const forecastResponse = await CallForcastApi({lat : response.coord.lat , lon : response.coord.lon});
        setForecastState(forecastResponse);
    }
    if (WeatherState.city.length === 0){
        getWeatherData (city);
    }

    return (
        <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>
            <Searchinfo city={city} getWeatherData={getWeatherData}/>
            <Weatherinfo weather = {WeatherState}/>
            <Forecastlist forecast = {forecastState}/>
        </div>
    );
}

export default Weather;