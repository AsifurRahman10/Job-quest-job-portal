import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Title } from "../Component/Title";
import { Card, Typography } from "@material-tailwind/react";

export const MyAppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [appliedData, setAppliedData] = useState([]);

  // Fetching applied job data
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/myAppliedJobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAppliedData(data);
        })
        .catch((err) => console.error("Error fetching applied jobs:", err));
    }
  }, [user]);

  // Define table headers explicitly
  const tableHeaders = [
    "Job ID",
    "Name",
    "Phone",
    "User Email",
    "Company",
    "Logo",
    "Title",
    "Job Type",
    "Delete",
  ];

  return (
    <div className="mt-6 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <Title
        title={"My Applications"}
        para={"See all of your applications from here"}
      ></Title>

      <div className="mt-10">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appliedData.map((application) => (
                <tr key={application.jobID} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.jobID || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.name || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.phone || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.userEmail || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.company || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <img
                      src={application.company_logo}
                      alt={`${application.company} logo`}
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.title || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {application.jobType || "N/A"}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      variant="small"
                      color="blue"
                      className="font-medium"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};
