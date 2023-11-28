import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center">
        <img
          className="object-cover h-40 w-full"
          src={user.photoURL}
          alt={user.displayName}
        />
      </div>
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {user.displayName}
        </h2>
        <p className="text-gray-600 mt-2">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
