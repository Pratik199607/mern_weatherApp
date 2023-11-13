import { SunIcon } from "@heroicons/react/24/solid";

function Loading() {
	return (
		<div className="bg-gradient-to-r from-[#42275a] to-[#734b6d] min-h-screen flex flex-col items-center justify-center text-white">
			<SunIcon className="h-24 w-24 animate-bounce text-yellow-500" color="yellow" />
			<h1 className="text-6xl font-bold text-center mb-10 animate-pulse">Loading Weather Info</h1>
		</div>
	);
}
export default Loading;
