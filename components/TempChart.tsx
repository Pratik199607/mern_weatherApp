"use client";
import { Card, AreaChart, Title } from "@tremor/react";
import { time } from "console";

type Props = {
	results: Root;
};

function TempChart({ results }: Props) {
	const hourly = results?.hourly.time
		.map((time) =>
			new Date(time).toLocaleString("en-IN", {
				hour: "numeric",
				hour12: false,
			})
		)
		.slice(1, 25);

	const data = hourly.map((hour, i) => ({
		time1: Number(hour),
		"UV Index": results.hourly.uv_index[i],
		"Temperature (C)": results.hourly.temperature_2m[i],
	}));
	console.log("Hourly", hourly);

	const dataFormatter = (num: number) => `${num}°C`;

	return (
		<Card>
			<Title>Temperature & UV Index</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="time1"
				categories={["Temperature (C)", "UV Index"]}
				colors={["yellow", "rose"]}
				minValue={0}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
				showXAxis
				showYAxis
			/>
		</Card>
	);
}

export default TempChart;
