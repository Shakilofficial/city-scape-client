import axiosSecure from ".";

//save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
    role: "user",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

//get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);
  return data;
};

export const clearCookie = async (email) => {
  const { data } = await axiosSecure.get("/logout", email);
  return data;
};
