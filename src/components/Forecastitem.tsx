import {Daily} from "@/types/api/ForecastResponse";
import Weathericon from "@/components/Weathericon";


interface Props {
    item : Daily,
}
function Forecastitem({item} : Props) {
    let day = new Date(item.dt * 1000).toLocaleString('en-us' , {weekday : 'long'});
    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div>{day}</div>
            <Weathericon icon={item.weather[0].icon} size={36}/>
            <div className={"mt-3"}>
                <span className={"text-primary"}>{item.temp.min}</span>
                -
                <span className={"text-primary"}>{item.temp.max}</span>
            </div>
        </div>
    );
}

export default Forecastitem;