import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastResponse} from "@/types/api/ForecastResponse";

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '3dce9b1c66837262a25b3f448d354a76';



interface WeatherProps{
    city: string;
}
interface  ForecastProps{
    lat : number ,
    lon : number ,
}



export async function CallWeatherApi ({city}:WeatherProps) : Promise<WeatherResponse> {
    const response =await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`);
    return  await response.json();
}

export async function CallForcastApi ({lat , lon} : ForecastProps) : Promise<ForecastResponse> {
    const response =await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    return await response.json();
}