import Image from "next/image";
import "./page.css";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-tr from-yellow-400 to-pink-500 p-10 flex flex-col">
			<Card className="max-w-4xl mx-auto">
				<Text className="font-bold text-center mb-10 custom-text">Weather App</Text>
				<Subtitle className="text-xl text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat dicta provident eos,
					rerum voluptatum dolorem officia deleniti rem autem.
				</Subtitle>

				<Divider className="my-10" />

				<Card className="bg-gradient-to-r from-yellow-300 to-pink-500">
					<CityPicker />
				</Card>
			</Card>
		</div>
	);
}
