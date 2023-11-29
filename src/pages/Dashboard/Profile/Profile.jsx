import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-md overflow-hidden">
        <div className="flex justify-center bg-gray-200">
          <img
            className="object-cover h-64 w-full"
            src={user.photoURL}
            alt={user.displayName}
          />
        </div>
        <div className="py-6 px-8 text-white">
          <h2 className="text-3xl font-bold mb-2">{user.displayName}</h2>
          <p className="text-lg mb-4">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
