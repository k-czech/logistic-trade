import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="flex">
			<div className="flex min-h-screen w-full flex-row">
				<DynamicMap />
			</div>
		</div>
	);
}
