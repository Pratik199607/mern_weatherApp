"use client";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Select from "react-select";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

type option = {
	value: {
		latitude: string;
		longitude: string;
		isoCode: string;
	};
	label: string;
} | null;

type cityOption = {
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
	const [selectedCity, setSelectedCity] = useState<cityOption>(null);
	const router = useRouter();

	const handleSelectedCountry = (option: option = null) => {
		setSelectedCountry(option);
		setSelectedCity(null);
	};

	const handleSelectedCity = (option: cityOption = null) => {
		setSelectedCity(option);
		router.push(
			`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
		);
	};

	useEffect(() => {
		// Clear the selectedCity when the selectedCountry changes
		setSelectedCity(null);
	}, [selectedCountry]);

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<div className="flex items-center space-2 text-white/80">
					<GlobeAsiaAustraliaIcon className="h-5 w-5 text-white" />
					<label htmlFor="country">Country</label>
				</div>
				<Select
					placeholder="Select country.."
					id="my-react-select-country"
					value={selectedCountry}
					onChange={handleSelectedCountry}
					className="text-0.6xs focus:outline-none focus:border-none sm:text-base text-gray-700"
					options={options}
				/>
			</div>
			{selectedCountry && (
				<div className="space-y-2">
					<div className="flex items-center space-2 text-white/80">
						<GlobeAsiaAustraliaIcon className="h-5 w-5 text-white" />
						<label htmlFor="country">City</label>
					</div>
					<Select
						placeholder="Select city.."
						id="my-react-select-city"
						value={selectedCity}
						onChange={handleSelectedCity}
						className="text-0.6xs focus:outline-none focus:border-none sm:text-base text-gray-700"
						options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((city) => ({
							value: {
								latitude: city.latitude!,
								longitude: city.longitude!,
								countryCode: city.countryCode,
								name: city.name,
								stateCode: city.stateCode,
							},
							label: city.name,
						}))}
						// options = {cityOptions || []}
					/>
				</div>
			)}
		</div>
	);
}
export default CityPicker;
