import { type } from "os";
import React from "react";
type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}
function WeatherPage({ params: { city, lat, long } }: Props) {
    return <div>Welcome to WeatherPage: {city} {lat} {long}</div>;
}

export default WeatherPage;