import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard";

const UserData = () => {
  const [taskData, setTaskData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/fakedata/taskFakeData.json")
      .then((res) => setTaskData(res.data));
  }, []);



//   load information of data section
  useEffect(() => {
    axios
      .get("/fakedata/dataFakeData.json")
      .then((res) => setData(res.data));
  }, []);

  console.log(taskData);

  return (
    <div className="max-w-[560px] mx-auto bg-white   custom-shadow  my-4 p-5 ">
      <div className="main-content">
        {/* task section */}
        <div className="task">
          <h3 className="text-center text-xl font-bold mb-5">Task</h3>

          <div className="grid grid-cols-3 gap-5">
            {taskData.map((taskData) => (
              <TaskCard key={taskData._id} taskData={taskData} />
            ))}
          </div>

          {/* dataSection */}

                  {/* task section */}
        <div className="my-6">
          <h3 className="text-center text-xl font-bold mb-5">Data</h3>

          <div className="grid grid-cols-4 gap-5">
            {data.map((taskData) => (
              <TaskCard key={taskData._id} taskData={taskData} />
            ))}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default UserData;
