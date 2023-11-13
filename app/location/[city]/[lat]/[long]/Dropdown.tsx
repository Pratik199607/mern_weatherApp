"use client";
import React, { useState } from "react";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
interface DropdownProps {
	resp: any;
}
const Dropdown = ({ resp }: DropdownProps) => {
	const [selectedChart, setSelectedChart] = useState<string>("temp"); // Default selection

	const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedChart(event.target.value);
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col sm:flex-row justify-between px-2">
				<span className="font-bold text-2xl p-2">See the Weather Unfold 🌤️</span>
				<select
					className="p-2 outline-1 outline-slate-900"
					value={selectedChart}
					onChange={handleChartChange}
				>
					<option value="temp">Temperature Chart</option>
					<option value="rain">Rain Chart</option>
					<option value="humidity">Humidity Chart</option>
				</select>
			</div>
			{selectedChart === "temp" && <TempChart results={resp} />}
			{selectedChart === "rain" && <RainChart results={resp} />}
			{selectedChart === "humidity" && <HumidityChart results={resp} />}
		</div>
	);
};

export default Dropdown;
