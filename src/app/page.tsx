import dynamic from "next/dynamic";
import { FormComponent } from "@/components/organisms/Form";

const DynamicMap = dynamic(() => import("../components/Map"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="flex flex-row">
			<div className="flex w-1/2 flex-row px-12 py-12">
				<div className="w-1/2">
					<FormComponent />
				</div>
				<div className="w-1/2"></div>
			</div>
			<div className="min-h-screen w-1/2">
				<DynamicMap />
			</div>
		</div>
	);
}
