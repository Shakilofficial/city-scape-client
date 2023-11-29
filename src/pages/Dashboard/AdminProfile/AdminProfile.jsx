import SectionTitle from "../../../components/Shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <SectionTitle heading="Admin Profile" />

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
          {user.role && (
            <div className="bg-opacity-80 bg-white border-t-4 border-white rounded-b px-4 py-3 shadow-md mb-4">
              <p className="text-sm font-semibold text-white">
                Role: {user.role}
              </p>
            </div>
          )}

          <div>
            <p className="text-lg mb-2">
              <span className="font-semibold">Organization:</span> CitySpace Co.
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Department:</span> Department of Development
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
