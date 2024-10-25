import Forecastitem from "@/components/Forecastitem";
import {it} from "node:test";
import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";



interface Props {
    // me
    forecast : ForecastResponse,

}

function Forecastlist({forecast}:Props) {
    console.log(forecast);

    return (
        <div className={"grid grid-cols-8"}>
            {
                forecast.daily.map((item :Daily) => {
                    return <Forecastitem item = {item}/>
                })
            }

        </div>
    );
}

export default Forecastlist;