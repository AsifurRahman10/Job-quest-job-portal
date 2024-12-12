import { Link } from "react-router-dom";

export const JobCard = ({ job }) => {
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
  } = job;
  return (
    <div className="p-4 bg-white hover:bg-[#f1f6fd] rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="mr-2">{jobType}</span>
        <span>•</span>
        <span className="ml-2">4 minutes ago</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#3b65f5] font-semibold text-lg">
          ৳{salaryRange.min} - ৳{salaryRange.max}/month
        </p>
        <Link to={`/JobDetails/${_id}`}>
          <button className="px-4 py-2 bg-[#3b65f5] text-white rounded-lg text-sm hover:bg-blue-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};
