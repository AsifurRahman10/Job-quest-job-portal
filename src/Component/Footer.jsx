import { Typography } from "@material-tailwind/react";
import logo from "../../public/logo.jpg";
export const Footer = () => {
  return (
    <footer className="bg-transparent p-8 w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-10">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Created By Asifur Rahman
      </Typography>
    </footer>
  );
};
