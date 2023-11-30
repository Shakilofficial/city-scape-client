import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://city-scape-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
