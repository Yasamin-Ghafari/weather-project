import Searchinfo from "@/components/Searchinfo";
import Weatherinfo from "@/components/Weatherinfo";
import Forecastlist from "@/components/Forecastlist";
import {useState} from "react";

interface Props {
    city: string;
}
function Weather({city}:Props) {
    const [WeatherState , SetWeatherState] = useState<Weather>({
        city : city,
        wind : '',
        humidity : '',
        description : '',
        icon : '',
        daily : [],
    })
    // console.log(WeatherState);

    // async function CallWeatherApi = () : void =>{
    //     await fetch() ;
    // }
    return (
        <div>
            <Searchinfo/>
            <Weatherinfo/>
            <Forecastlist/>
        </div>
    );
}

export default Weather;