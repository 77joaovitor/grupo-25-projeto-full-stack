import ReactLoading from "react-loading";
import { UserContext } from "../../context/user/userContext";
import { LoadingBox } from "./style";

const Loading = () => {
    const { isLoading } = UserContext();

    return (
        <>
            { 
                isLoading && 
                    <LoadingBox className="box_loading">
                       <ReactLoading type="spinningBubbles" />
                    </LoadingBox>
            }
        </>
    )
}

export default Loading;