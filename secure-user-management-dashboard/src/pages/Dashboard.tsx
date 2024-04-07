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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
        {users.map((user: Users) => (
          <div className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="rounded-t-lg"
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                Name - {`${user.first_name} ${user.last_name}`}
              </h5>

              <p className="mb-3 font-normal text-white-700 dark:text-white-400">
                Email - {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
