import axiosSecure from ".";

export const getAllProperties = async () => {
  const { data } = await axiosSecure("/properties");
  return data;
};

export const getSingleProperties = async (id) => {
  const { data } = await axiosSecure(`/properties/${id}`);
  return data;
};

export const getSingleWishList = async (id) => {
  const { data } = await axiosSecure(`/wishlist/${id}`);
  return data;
};