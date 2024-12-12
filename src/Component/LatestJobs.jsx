import { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { div } from "motion/react-client";
import { Title } from "./Title";

export const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/sixJobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <Title
        title={"Jobs of the day"}
        para={"Get the best jobs for you today"}
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};
