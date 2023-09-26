import Image from "next/image";
import "./page.css";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col">
			<Card className="max-w-4xl mx-auto">
				<Text className="font-bold text-center mb-10 custom-text">Weather App</Text>
				<Subtitle className="text-xl text-center">
					Powered By Nextjs, TailwindCSS, Tremor 3.x +More!
				</Subtitle>

				<Divider className="my-10" />

				<Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
					<CityPicker />
				</Card>
			</Card>
		</div>
	);
}
