import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";

const useProperties = () => {
  const { user } = useAuth();
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/properties/agent/${user.email}`);
      return res.data;
    },
  });
  return [properties, refetch];
};

export default useProperties;
