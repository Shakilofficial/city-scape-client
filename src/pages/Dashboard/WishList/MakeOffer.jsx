import { useParams } from "react-router-dom";

const MakeOffer = () => {
    const { propertyId } = useParams();
console.log(propertyId);
    return (
        <div>
            
        </div>
    );
};

export default MakeOffer;