import { useParams } from "react-router-dom";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";

export const ApplyNow = () => {
  const { id } = useParams();
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">
      <Typography variant="h4" color="blue-gray">
        Fill the form to apply
      </Typography>
      <form className="mt-8 mb-2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Phone Number
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="Phone Number"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Explain your self in one line
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Hi"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Apply
        </Button>
      </form>
    </div>
  );
};
