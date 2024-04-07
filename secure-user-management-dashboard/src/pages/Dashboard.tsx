import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/action";
import { RootState } from "../store/store";

export interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://reqres.in/api/users?page=1");
        dispatch(setUsers(res.data.data));
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.users);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl text-teal-900 font-semibold mb-6 text-center">
        Dashboard
      </h2>
      {/* <button onClick={handleClick} className="bg-red-500 text-white px-4 py-2 rounded shadow">Logout</button> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
        {users.map((user: Users) => (
          <div
            key={user.id}
            className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-blue-400 "
          >
            <img
              className="w-full"
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Name - {`${user.first_name} ${user.last_name}`}
              </div>
              <p className="text-gray-700 text-base">Email - {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
