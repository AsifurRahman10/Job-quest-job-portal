import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { JobCard } from "../Component/JobCard";

export const AllJobs = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">
      <Title
        title={`${jobData.length} job available`}
        para={"Get the best jobs for you"}
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
        {jobData.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};
