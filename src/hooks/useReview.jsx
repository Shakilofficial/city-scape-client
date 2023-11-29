import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";

const useReviews = () => {
  const { user } = useAuth();
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${user.email}`);
      return res.data;
    },
  });
  return [reviews, refetch];
};

export default useReviews;
