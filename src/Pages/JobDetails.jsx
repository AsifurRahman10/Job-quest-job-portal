import { FaBriefcase } from "react-icons/fa";
import jobImg from "../assets/banner-happy.jpg";
import { useLoaderData } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";

export const JobDetails = () => {
  const jobDetails = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = jobDetails;
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <img
        className="w-full h-[400px] object-cover rounded-3xl mt-4"
        src={jobImg}
        alt=""
      />
      <div>
        <div>
          <h2 className="mt-4 text-3xl font-bold">{title}</h2>
          <div className="flex gap-10">
            <p className="flex items-center gap-2 text-lg text-gray-600 mt-2">
              <FaBriefcase /> {jobType}
            </p>
            <p className="flex items-center gap-2 text-lg text-gray-600 mt-2">
              <CiClock1 /> {applicationDeadline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
