import { useParams } from "react-router-dom";

const MakeOffer = () => {
    const { id} = useParams();
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default MakeOffer;