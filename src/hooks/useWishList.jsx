import useAuth from "./useAuth";
import axiosSecure from "../api";
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {
  const { user } = useAuth();
  const { refetch, data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user.email}`);
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default useWishList;
