import axiosSecure from ".";

export const getAllProperties = async () => {
  const { data } = await axiosSecure("/properties");
  return data;
};
