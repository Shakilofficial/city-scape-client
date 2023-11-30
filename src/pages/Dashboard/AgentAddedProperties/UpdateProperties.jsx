import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../components/Shared/SectionTitle";


const UpdateProperties = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const property = properties.find((pr) => pr._id === id);
    console.log(property);
    return (
        <div>
            <SectionTitle heading="Update The Property"></SectionTitle>
        </div>
    );
};

export default UpdateProperties;