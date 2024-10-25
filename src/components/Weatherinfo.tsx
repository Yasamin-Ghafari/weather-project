import Weathericon from "@/components/Weathericon";
import weathericon from "@/components/Weathericon";

interface Props{
    weather : Weather ,
}

function Weatherinfo({weather}: Props) {
    return (
        <div className={"grid grid-cols-2 mb-12"}>
            <div>
                <h1 className={"text-2xl"}>{weather.city}</h1>
                <div>{weather.description}</div>
                <div>Humidity : <span className={"text-primary"}>{weather.humidity}</span> , wind : <span className={"text-primary"}>{weather.wind}km/h</span></div>
            </div>
            <div className={"flex justify-end"}>
                <Weathericon size={56} icon={weather.icon}/>
            </div>
        </div>
    );
}

export default Weatherinfo;