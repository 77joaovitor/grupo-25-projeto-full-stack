import Lottie from "react-lottie"
import { ContainerSection } from "./style"
import loadingAnimated from "../../util/img/90767-internal-server-error.json"
import { useState } from "react";

export const Error = () => {
	const [isPaused, setIsPaused] = useState<boolean>(false)
	const [isStopped, setIsStopped] = useState<boolean>(false)
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimated,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		}
	};
      
    return (
        <ContainerSection>
			<div className="img">
				<Lottie
					options={defaultOptions}
					isStopped={isStopped}
					isPaused={isPaused}
				/>
			</div>
        </ContainerSection>
    );
};
