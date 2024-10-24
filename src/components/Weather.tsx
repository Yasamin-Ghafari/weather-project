import Searchinfo from "@/components/Searchinfo";
import Weatherinfo from "@/components/Weatherinfo";
import Forecastlist from "@/components/Forecastlist";

function Weather() {
    return (
        <div>
            <Searchinfo/>
            <Weatherinfo/>
            <Forecastlist/>
        </div>
    );
}

export default Weather;