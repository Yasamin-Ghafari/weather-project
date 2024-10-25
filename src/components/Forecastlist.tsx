import Forecastitem from "@/components/Forecastitem";
import {it} from "node:test";
import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";



interface Props {
    // me
    forecast : ForecastResponse | null,

}

function Forecastlist({forecast}:Props) {
    console.log(forecast);

    return (
        <div className={"grid grid-cols-8"}>
            {/*{*/}
            {/*    forecast.daily.map((item :Daily) => {*/}
            {/*        return <Forecastitem item = {item}/>*/}
            {/*    })*/}
            {/*}*/}

            {/*me*/}
            {
                forecast?.daily?.map((item: Daily) => (
                    <Forecastitem item={item} />
                )) || <p>No forecast data available</p>
            }

        </div>
    );
}

export default Forecastlist;