import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useState } from "react";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-OpenSans">
      <Link to={"/allJobs"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            All Jobs
          </a>
        </Typography>
      </Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-transparent border-none rounded-none px-4 py-2 lg:px-8 lg:py-2 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 font-medium flex justify-center items-center gap-2"
            >
              <img className="w-20" src={logo} alt="" />
              <span className="text-2xl font-bold">Job-Quest</span>
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to={"/register"}>
                <Button
                  variant="text"
                  size="lg"
                  className="hidden lg:inline-block"
                >
                  <span>Register</span>
                </Button>
              </Link>
              <Link to={"/signIn"}>
                <Button
                  size="lg"
                  className="hidden lg:inline-block bg-[#3b65f5]"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Register</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign In</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};
