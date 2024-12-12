import {
  FaBriefcase,
  FaDollarSign,
  FaNetworkWired,
  FaRegBuilding,
} from "react-icons/fa";
import jobImg from "../assets/banner-happy.jpg";
import { useLoaderData } from "react-router-dom";
import { CiClock1, CiLocationArrow1 } from "react-icons/ci";
import { Button } from "@material-tailwind/react";
import { BsFillCupFill } from "react-icons/bs";

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
  console.log(responsibilities);
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <img
        className="w-full h-[400px] object-cover rounded-3xl mt-4"
        src={jobImg}
        alt=""
      />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-4 text-3xl font-bold">{title}</h2>
          <div className="flex gap-10">
            <p className="flex items-center gap-2 text-lg text-gray-600 mt-4">
              <FaBriefcase /> {jobType}
            </p>
            <p className="flex items-center gap-2 text-lg text-gray-600 mt-4">
              <CiClock1 /> {applicationDeadline}
            </p>
          </div>
        </div>
        <div>
          <Button className="bg-[#3b65f5] py-4 px-8 rounded-md">
            Apply Now
          </Button>
        </div>
      </div>
      <hr className="mt-4 border-gray-900" />
      <div className="mt-4 border-2 p-4">
        <h3 className="text-2xl font-bold">Employment Information</h3>
        <hr className="mt-4" />
        <div className="p-4  rounded-lg shadow-md">
          {/* Company Name */}
          <div className="flex items-center gap-3 mt-4">
            <FaRegBuilding className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Company Name:</span>{" "}
              <span className="text-black ml-2">{company}</span>
            </div>
          </div>

          {/* Industry */}
          <div className="flex items-center gap-3 mt-4">
            <FaRegBuilding className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Industry:</span>{" "}
              <span className="text-black ml-2">{category}</span>
            </div>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-3 mt-4">
            <FaDollarSign className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Salary:</span>{" "}
              <span className="text-black ml-2">{`${salaryRange.min} to ${salaryRange.max} ${salaryRange.currency}`}</span>
            </div>
          </div>

          {/* Job Type */}
          <div className="flex items-center gap-3 mt-4">
            <BsFillCupFill className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Job Type:</span>{" "}
              <span className="text-black ml-2">{jobType}</span>
            </div>
          </div>

          {/* Requirements */}
          <div className="flex items-start gap-3 mt-4">
            <FaNetworkWired className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Requirements:</span>
              <ul className="flex flex-wrap gap-2 mt-2">
                {requirements.map((item, index) => (
                  <li
                    key={index}
                    className="border border-gray-300 rounded-full px-4 py-1 text-sm text-black bg-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 mt-4">
            <BsFillCupFill className="text-2xl text-gray-700" />
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-black ml-2">{status}</span>
            </div>
          </div>
        </div>
      </div>
      {/* company description */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Welcome to {company}
          </h3>
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

        {/* Location */}
        <p className="mt-4 flex items-center text-lg text-gray-700 gap-4">
          <CiLocationArrow1 className="text-xl text-gray-500" />
          <span>{location}</span>
        </p>

        {/* Responsibilities */}
        <p className="text-lg font-medium mt-6 text-gray-800">
          Responsibilities
        </p>
        <ul className="list-inside list-disc mt-4 text-gray-600 leading-relaxed">
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        {/* Contact Details */}
        <div className="mt-6">
          <p className="text-gray-700">
            <span className="font-semibold">Contact Email:</span>{" "}
            <span className="text-gray-800">{hr_email}</span>
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">HR Name:</span>{" "}
            <span className="text-gray-800">{hr_name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
