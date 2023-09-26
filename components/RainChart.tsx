'use client';
import { Card, AreaChart, Title } from '@tremor/react';
import { time } from 'console';

type Props = {
    results: Root;
};

function RainChart({ results }: Props) {
    const hourly = results?.hourly.time.map((time) => 
        new Date(time).toLocaleString("en-IN", {
            hour: "numeric",
            hour12: false
        })
    ).slice(0,24);
    
    const data = hourly.map((hour, i) => ({
		time: Number(hour),
		"Rain (%)": results.hourly.precipitation_probability[i],
    })); 
    // console.log("Hourly",hourly);

    const dataFormatter = (num: number) => `${num}%`;

    return (
			<Card>
				<Title>Chances of Rain</Title>
				<AreaChart
					className="mt-6"
					data={data}
					showLegend
					index="time"
					categories={["Rain (%)"]}
					colors={["blue"]}
					minValue={0}
					maxValue={100}
					valueFormatter={dataFormatter}
					yAxisWidth={40}
					showXAxis
					showYAxis
				/>
			</Card>
		);
};

export default RainChart;