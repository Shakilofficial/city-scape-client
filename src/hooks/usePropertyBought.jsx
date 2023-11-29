import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";

const usePropertyBought = () => {
  const { user } = useAuth();
  const { refetch, data: buyingList = [] } = useQuery({
    queryKey: ["buyingList", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/make-offer/${user.email}`);
      return res.data;
    },
  });
  return [buyingList, refetch];
};

export default usePropertyBought;
