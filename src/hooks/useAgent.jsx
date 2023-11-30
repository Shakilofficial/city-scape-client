import { useQuery } from "@tanstack/react-query";

import axiosSecure from "../api";
import useAuth from "./useAuth";

const useAgent = () => {
  const { user } = useAuth();
  const { data: isAgent, isPending: isAgentLoading } = useQuery({
    queryKey: [user?.email, "isAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user.email}`);
      console.log(res.data);
      return res.data?.agent;
    },
  });
  return [isAgent, isAgentLoading];
};

export default useAgent;
