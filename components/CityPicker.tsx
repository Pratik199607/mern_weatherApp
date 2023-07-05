"use client";
import { State, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react";

type option = {
	value: {
		latitude: string;
		longitude: string;
		isoCode: string;
	};
	label: string;
} | null;

type countryOption = {
	value: {
		latitude: string;
		longitude: string;
		countryCode: string;
		name: string;
		stateCode: string;
	};
	label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
	value: {
		latitude: country.latitude,
		longitude: country.longitude,
		isoCode: country.isoCode,
	},
	label: country.name,
}));

function CityPicker() {
	const [selectedCountry, setSelectedCountry] = useState<option>(null);
	const [selectedState, setSelectedState] = useState<countryOption>(null);
	const router = useRouter();

	const handleSelectedCountry = (option: option) => {
		setSelectedCountry(option);
		setSelectedState(null);
	};

	return (
		<div>
			<div>
				<label htmlFor="country">Country</label>
			</div>
			<Select
				placeholder="Select country.."
				value={selectedCountry}
				onChange={handleSelectedCountry}
				className="text-0.6xs focus:border-none sm:text-base"
				options={options}
			/>
		</div>
	);
}
export default CityPicker;
