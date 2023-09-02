import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import React from "react";
import CalloutCard from "@/components/CalloutCard";
import StatusCard from "@/components/StatusCard";
type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}
async function WeatherPage({ params: { city, lat, long } }: Props) {
    const client = getClient();
    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: true,
            longitude: long,
            latitude: lat,
            timezone: 'IST',
        }
    });

    const resp: Root = data.myQuery;
    console.log(resp);
    return (
			<div>
				<div className="p-5">
					<div className="pb-5">
						<h2 className=" text-xl font-bold">Todays Overview</h2>
						<p className="text-sm text-gray-400">
							Last Updated at: {new Date(resp.current_weather.time).toLocaleString()}(
							{resp.timezone})
						</p>
					</div>

					<div>
						<CalloutCard warning message="This i9s where GPT 3.5 summary will go" />
					</div>

					<div>
						<StatusCard
							title="Maximum Temperature"
							metric={`${resp.daily.temperature_2m_max[0].toFixed(1)}°`}
							color="yellow"
						/>
						<StatusCard
							title="Minimum Temperature"
							metric={`${resp.daily.temperature_2m_min[0].toFixed(1)}°`}
							color="green"
						/>
					</div>

					<div>
						<StatusCard
							title="UV Index"
							metric={`${resp.daily.uv_index_max[0].toFixed(1)}`}
							color="rose"
						/>
						{Number(resp.daily.uv_index_max[0].toFixed(1)) > 5 && (
							<CalloutCard message="The UV is high today, be sure to wear SPF" warning />
						)}
					</div>

					<div className="flex space-x-3">
						<StatusCard
							title="Windspeed"
							metric={`${resp.current_weather.windspeed}m/s`}
							color="cyan"
						/>
						<StatusCard
							title="Wind Directions"
							metric={`${resp.current_weather.winddirection.toFixed(1)}°`}
							color="violet"
						/>
					</div>
				</div>
			</div>
		);
}

export default WeatherPage;